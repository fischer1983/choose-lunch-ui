import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  apiUrl = 'http://localhost:8080/restaurantes';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get(this.apiUrl);
  }

}
