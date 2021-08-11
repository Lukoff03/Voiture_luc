import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate:any ;

  
  cars: Car[] | undefined;
  constructor(private data:DataService) { }

  newCars = new Car("Tutue", "Groland", "./assets/img/drivers/danicapatrick.jpg", 2, 1.19);
  ngOnInit() {
    this.carUpdate = new Date()
    this.cars = this.data.getAllCars()
    this.data.cars.push(this.newCars)
  }

}

