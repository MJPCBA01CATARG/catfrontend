import { Component, OnInit } from '@angular/core';
import {DataService} from '../app.data.service';



@Component({
  selector: 'app-listalugar',
  templateUrl: './listalugar.component.html',
  styleUrls: ['./listalugar.component.css']
})
export class ListalugarComponent implements OnInit {

  public currentEuroRates: any = null;
  //public sectores: view_model_listasector[] = null;
  constructor(private data: DataService) { }
  lugares: Object;
  ngOnInit() {

  
    this.data.getLugares().subscribe(data => {
      this.lugares = data
      console.log(this.lugares);
    })

  }

}
