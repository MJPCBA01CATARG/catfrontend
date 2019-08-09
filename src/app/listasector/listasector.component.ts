import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listasector',
  templateUrl: './listasector.component.html',
  styleUrls: ['./listasector.component.css']
})
export class ListasectorComponent implements OnInit {

  
  public currentEuroRates: any = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getSectores();
  }

  private getSectores() {
    let urlapi
    = 'https://localhost:5001/api/sectores';
    
    this.httpClient
      .get(urlapi)
      .subscribe(apiData => (this.currentEuroRates = apiData));
  }
}
