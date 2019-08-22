import { Component, OnInit } from '@angular/core';
import { view_model_listaempleados } from './view_model_listaempleados';
import{DataService}from "../app.data.service";
@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.component.html',
  styleUrls: ['./listaempleados.component.css']
})
export class ListaempleadosComponent implements OnInit {

  public currentEuroRates: any = null;
  //public empleado: view_model_listaempleados[] = null;
  constructor(private data: DataService) { }
  empleados: Object;
  ngOnInit() {


  
    this.data.getempleados().subscribe(data => {
      this.empleados = data
      console.log(this.empleados);
    })


  }
 
}