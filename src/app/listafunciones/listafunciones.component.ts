import { Component, OnInit } from '@angular/core';
import { view_model_listafunciones } from './view_model_listafunciones';
import {DataService} from '../app.data.service';

@Component({
  selector: 'app-listafunciones',
  templateUrl: './listafunciones.component.html',
  styleUrls: ['./listafunciones.component.css']
})
export class ListafuncionesComponent implements OnInit {

  public currentEuroRates: any = null;
  //public sectores: view_model_listasector[] = null;
  constructor(private data: DataService) { }
  funciones: Object;
  ngOnInit() {

  
    this.data.getFunciones().subscribe(data => {
      this.funciones = data
      console.log(this.funciones);
    })

  }

}
