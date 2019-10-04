import { Component, OnInit } from '@angular/core';

import { VotacaoService } from '../votacao.service';

@Component({
  selector: 'app-parcial-votacao',
  templateUrl: './parcial-votacao.component.html',
  styleUrls: ['./parcial-votacao.component.css']
})
export class ParcialVotacaoComponent implements OnInit {

  data: any;

  constructor(private votacaoService: VotacaoService) {}

  ngOnInit() {

    this.votacaoService.parcialCorrente().toPromise().then(
      votacaoParcialDoDia => {

        const restaurantesList = (<any> votacaoParcialDoDia)
          .map(votacaoParcialDoDia => votacaoParcialDoDia.nomeRestaurante);            

        const qtdeVoteList = (<any> votacaoParcialDoDia)
          .map(votacaoParcialDoDia => votacaoParcialDoDia.qtdeVotos); 

        const bgColor = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'];
        const hvColor = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'];
       
        this.data = {
          labels: restaurantesList,
          datasets: [
              {
                  data: qtdeVoteList,
                  backgroundColor: bgColor,
                  hoverBackgroundColor: hvColor
              }]    
          };           

      }
    )};  

}
