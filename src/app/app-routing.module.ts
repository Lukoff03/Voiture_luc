import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TpComponent } from './tp/tp.component';

const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: "cars", component: CarsListComponent},
  { path: 'drivers', component: DriversListComponent},
  { path: 'tp', component: TpComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
