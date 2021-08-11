import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsListComponent } from '../cars-list.component';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car!: Car;

  isBooked:boolean = false;
  btnStyle: string ="";
  badge:string="badge-info";
  
  bookingMessage: string = "Réserver maintenant !";
  
  constructor() { }
  
  ngOnInit() {
  }
  test = false;
  onBooking(){
    this.isBooked= true;
    this.bookingMessage= "Bonne route ! [réservée]";
    this.btnStyle="btn-success";
    alert('voiture reservé');
    this.test = !this.test;
  }
  
  

}