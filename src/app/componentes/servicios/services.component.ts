import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin:30,
    center: true,
    navSpeed: 700,
    autoWidth:true,
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  public logoTec = [
    '../../../assets/img/angular.png',
    '../../../assets/img/api.png',
    '../../../assets/img/asp_net.png',
    '../../../assets/img/Auth0.png',
    '../../../assets/img/js.png',
    '../../../assets/img/ps.png',
    '../../../assets/img/php.png',
    '../../../assets/img/sql.png',
    '../../../assets/img/wordpress.png',
  ];

  constructor() { }

  ngOnInit() {
  }

}
