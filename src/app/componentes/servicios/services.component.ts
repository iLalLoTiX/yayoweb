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
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
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
