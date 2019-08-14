import { Component, OnInit } from '@angular/core';
import {DataService} from '../app.data.service';


@Component({
  selector: 'app-listaturnos',
  templateUrl: './listaturnos.component.html',
  styleUrls: ['./listaturnos.component.css']
})
export class ListaturnosComponent implements OnInit {

  public currentEuroRates: any = null;
  //public sectores: view_model_listasector[] = null;
  constructor(private data: DataService) { }
  turnos: Object;
  ngOnInit() {


  
    this.data.getTurnos().subscribe(data => {
      this.turnos = data
      console.log(this.turnos);
    })


  }


}
