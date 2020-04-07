import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProyectosModel } from '../componentes/modelos/proyectos.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  private url = 'https://yayo-6cbdd.firebaseio.com/';

  constructor(private http : HttpClient) { 
    
  }

  crearProyecto(proyecto: ProyectosModel){

    return this.http.post(`${this.url}/proyectos.json`, proyecto).
    pipe(
      map((resp: any) => {
        proyecto.id = resp.name;
        return proyecto;
      }
    ));

  }

  actualizarProyecto(proyecto: ProyectosModel){

    const proyectoTemp = {
      ...proyecto
    };
    delete proyectoTemp.id;
    return this.http.put(`${this.url}/proyectos/${proyecto.id}.json`, proyectoTemp);

  }

  borrarProyecto(id:string){
    return this.http.delete(`${this.url}/proyectos/${id}.json`)
  }

  getProyecto(id: string){
    return this.http.get(`${this.url}/proyectos/${id}.json`).pipe(
      map((resp: any) => {
        return resp;
      }
    ));
  }

  getProyectos(){
    return this.http.get(`${this.url}/proyectos.json`).pipe(
      map(this.crearArreglo)
      );
  }

  private crearArreglo(ProyectoObj: object){
    const proyectos : ProyectosModel[] = [];
    if(ProyectoObj == null){
      return [];
    }
    Object.keys(ProyectoObj).forEach(key => {
      const proyecto: ProyectosModel = ProyectoObj[key];
      proyecto.id = key;
      proyectos.push(proyecto);
    });
    return proyectos;
  }

  

}
