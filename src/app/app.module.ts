import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ServicesComponent } from './componentes/servicios/services.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PreciosComponent } from './componentes/precios/precios.component';

//Servicios
import { HttpClientModule } from '@angular/common/http';
import { ImgService } from './providers/img.service';
import { environment } from 'src/environments/environment';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ServicesComponent,
    LoginComponent,
    DashboardComponent,
    PreciosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    ImgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
