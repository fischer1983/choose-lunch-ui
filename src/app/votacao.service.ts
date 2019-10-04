import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VotacaoService {

  apiUrl = 'http://localhost:8080/votacao';

  constructor(private httpClient: HttpClient) { }

  findByCurrentDate() {
    return this.httpClient.get(this.apiUrl + '/corrente');
  }

  votar(colaborador: any) {
    return this.httpClient.post(this.apiUrl, colaborador);
  }

  restauranteJaEleitoNaSemana(idRestaurante: any) {
    return this.httpClient.get(this.apiUrl + '/restauranteJaEleitoNaSemana/' + idRestaurante);
  }

  parcialCorrente() {
    return this.httpClient.get(this.apiUrl + '/parcialCorrente');
  }

}
