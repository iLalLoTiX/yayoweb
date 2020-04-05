import { Component, OnInit } from '@angular/core';
//servicios

import { LoginService } from '../../providers/login.service';
//firebase

import { FireBaseService } from '../../providers/fire-base.service';

import { Router } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
//modelos
import { ProyectosModel } from '../modelos/proyectos.model';
import { FileItem } from '../modelos/pngExp.model';
import { ImgService } from 'src/app/providers/img.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  proyecto = new ProyectosModel;
  archivos: FileItem[] = [];

  arregloPro: ProyectosModel [] = [];

  constructor(private auth: LoginService,
              private _fbs: FireBaseService,
              private _ci: ImgService,
              private router: Router) { }

    ngOnInit() {
      this._fbs.getProyectos().subscribe( resp => {this.arregloPro = resp});
    }

  salir()
  {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  guardar(form: NgForm){
    if(form.invalid){
      console.log("formulario incompleto");
      return;
    }
    if(this.proyecto.id == null){

      this._fbs.crearProyecto(this.proyecto).subscribe(resp=>{
        console.log(resp);
        this.arregloPro.push(resp);
        this.proyecto = resp;
      });

    }else{
      this._fbs.actualizarProyecto(this.proyecto).subscribe(resp => console.log(resp));
    }
    
  }

  ponerPro(id: string){

    this._fbs.getProyecto(id).subscribe( resp => {
      this.proyecto = resp;
      this.proyecto.id = id;
    });
    
  }
  limpiar(){
    this.proyecto.id = null;
    this.proyecto.nombre = null;
    this.proyecto.categoria = null;
    this.proyecto.desc = null;
    this.proyecto.img = null;
    this.proyecto.url = null;
  }

  borrarProyecto(id: string, i: number){
    this.arregloPro.splice(i, 1);
    this._fbs.borrarProyecto(id).subscribe(resp => console.log(resp));
  }

  //subir imagenes
  cargarImg(){
    this._ci.cargarImg(this.archivos)
  }
}
