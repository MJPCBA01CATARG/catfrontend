import { Component, OnInit } from '@angular/core';
import { view_model_listaempresa } from './view_model_listaempresa';
import {DataService} from '../app.data.service';

@Component({
  selector: 'app-listaempresa',
  templateUrl: './listaempresa.component.html',
  styleUrls: ['./listaempresa.component.css']
})
export class ListaempresaComponent implements OnInit {

  

  constructor(private data: DataService) { }
  empresas: Object;
  ngOnInit() {


  
    this.data.getempresa().subscribe(data => {
      this.empresas = data
      console.log(this.empresas);
    })


  }
 
}