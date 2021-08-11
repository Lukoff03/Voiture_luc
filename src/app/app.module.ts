import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouseComponent } from './carouse/carouse.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarItemComponent } from './cars-list/car-item/car-item.component';
import { TpComponent } from './tp/tp.component';
import { VoitureComponent } from './tp/voiture/voiture.component';
import { FormsModule } from '@angular/forms';
import { ReservationComponent } from './tp/reservation/reservation.component';
import { DriversItemComponent } from './drivers-list/drivers-item/drivers-item.component';
import { RestoService } from './service/resto.service';
import { BananeService } from './service/banane.service';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouseComponent,
    CarsListComponent,
    DriversListComponent,
    HomePageComponent,
    FourOhFourComponent,
    NavbarComponent,
    CarItemComponent,
    TpComponent,
    VoitureComponent,
    ReservationComponent,
    DriversItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "fr-FR"},BananeService, RestoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
