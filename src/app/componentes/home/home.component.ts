import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../../providers/fire-base.service';
import { ProyectosModel } from '../modelos/proyectos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  arregloPro: ProyectosModel [] = [];

  constructor(private _fbs: FireBaseService) { }

  ngOnInit() {
    this._fbs.getProyectos().subscribe( resp => {this.arregloPro = resp});
  }

}
