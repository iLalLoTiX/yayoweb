import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../componentes/modelos/pngExp.model';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  private Carpeta_img = 'img';
  
  constructor(private db: AngularFirestore) { }

  cargarImg(imagenes: FileItem[]){
    console.log(imagenes);
  }

  private guardarImagen( imagen: {nombre: string, url: string}){
    this.db.collection(`/${this.Carpeta_img}`).add(imagen)
  }

}
