import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ColaboradorService } from '../colaborador.service';
import { RestauranteService } from '../restaurante.service';
import { VotacaoService } from '../votacao.service';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  restaurantes = [];
  colaboradores = [];

  colaboradorSelecionado: any;
  restauranteSelecionado: any;

  constructor(
    private colaboradorService: ColaboradorService,
    private restauranteService: RestauranteService,
    private votacaoService: VotacaoService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultarColaboradores();
    this.consultarRestaurantes();
  }

  consultarColaboradores() {

    this.colaboradorService.findAll().subscribe(
      resposta => this.colaboradores = <any> resposta
    );

  }

  consultarRestaurantes() {

    this.restauranteService.findAll().subscribe(
      resposta => this.restaurantes = <any> resposta
    );

  }  


  votar() {

    if (this.validarVoto()) {

      this.votacaoService.findByCurrentDate().toPromise().then(votacaoDia => {
        
        let votacaoDoColaboradorHoje = (<any> votacaoDia).filter(
          votacao => votacao.id.colaborador.id === this.colaboradorSelecionado.id
        );

        this.votacaoService.restauranteJaEleitoNaSemana(this.restauranteSelecionado.id).toPromise().then(
          restauranteJaEleitoNaSemana => {
            console.log('eleito na semana');
            console.log(restauranteJaEleitoNaSemana);

            if (votacaoDoColaboradorHoje.length > 0) {

              this.messageService.add({
                severity: 'warn',
                summary: 'Colaborador já votou no dia de hoje'
              });              
    
            } else if (restauranteJaEleitoNaSemana) {

              this.messageService.add({
                severity: 'warn',
                summary: 'Restaurante não pode ser votado, pois já foi eleito nesta semana'
              });     

            } else {

              let voto: any = {};
              voto.colaborador = this.colaboradorSelecionado;
              voto.restaurante = this.restauranteSelecionado;

              this.votacaoService.votar(voto).subscribe(() => {
                
                this.colaboradorSelecionado = {};
                this.restauranteSelecionado = {};
                
                this.messageService.add({
                  severity: 'success',
                  summary: 'Voto computado com sucesso'
                }); 

                this.router.navigate(['parcial-votacao']);

              }, resposta => {
                    
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Erro inesperado. Tente novamente.'
                  });

                });             
            }            
        });  
      });
    }
    
  }

  validarVoto() {

    if (!this.colaboradorSelecionado) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Selecione seu nome'
      });

      return false;

    } else if (!this.restauranteSelecionado) {

      this.messageService.add({
        severity: 'warn',
        summary: 'Selecione o local que deseja almoçar'
      });

      return false;
    } 

    return true;
  }

}
