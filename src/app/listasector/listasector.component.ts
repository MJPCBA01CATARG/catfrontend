import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {view_model_listasector} from '../listasector/view_model_listasector';
import {DataService} from '../app.data.service';

@Component({
  selector: 'app-listasector',
  templateUrl: './listasector.component.html',
  styleUrls: ['./listasector.component.css']
})
export class ListasectorComponent implements OnInit {
    
  public currentEuroRates: any = null;
  //public sectores: view_model_listasector[] = null;
  constructor(private data: DataService) { }
  sectores: Object;
  ngOnInit() {
  
    this.data.getSectores().subscribe(data => {
      this.sectores = data
      console.log(this.sectores);
    })
  }
 
}
