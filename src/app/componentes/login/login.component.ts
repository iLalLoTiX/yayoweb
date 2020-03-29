import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../providers/login.service';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../modelos/usuario.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel;

  constructor(private _ls: LoginService,
              private router: Router) {

   }

  ngOnInit() {
    
  }

  login(form: NgForm){
    if(form.invalid){
      console.log("hola");
      return;}
    this._ls.login(this.usuario).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/dashboard')});
  }

}
