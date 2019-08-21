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

  getempresa() {
    return this.http.get('https://localhost:5001/api/empresa')
  }


}