
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-item',
  templateUrl: './drivers-item.component.html',
  styleUrls: ['./drivers-item.component.css']
})
export class DriversItemComponent implements OnInit {

  @Input() pilote:any;
  test:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  btnPilote:string ="";

  ajout() {
    this.pilote.likeIts=this.pilote.likeIts + 1;
  }

  negatif() {
    this.pilote.likeIts=this.pilote.likeIts - 1;
  }
  


}
