import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSectores() {
    return this.http.get('https://localhost:44368/api/sectores')
  }
  getLugares() {
    return this.http.get('https://localhost:44368/api/lugar')
  }
  getFunciones() {
    return this.http.get('https://localhost:44368/api/funciones')
  }
}