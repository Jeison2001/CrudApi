import { Component, OnInit } from '@angular/core';
import { Parqueadero } from '../models/parqueadero';
import { ParqueaderoService } from '../../services/parqueadero.service';


@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {

  //parqueaderos:Parqueadero[];
  constructor(private parqueaderoService:ParqueaderoService) { }

  ngOnInit(){
    /*this.parqueaderoService.get().subscribe(result => {
      this.parqueaderos = result;
      });*/
  }
  agregar(){
//crear el metodo cargar datos

  }
  borrarTabla(){

  }
  modificar(){

  }

}
