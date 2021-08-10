import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  banane ="";
  constructor() { }

  ngOnInit(): void {
  }
  test = false;
  onClick(){
    alert('voiture reservé');
    this.test = !this.test;
  }
}
