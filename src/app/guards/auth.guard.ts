import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _ls: LoginService,
              private root: Router){

  }

  canActivate(): boolean {
    if(this._ls.estaAutenticado())
    {
      return true;
    }
    else
    {
      this.root.navigateByUrl('/login');
    }
  }
  
}
