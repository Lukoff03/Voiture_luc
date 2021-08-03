import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {


  
  @Input() voiture:any;

  constructor() { }

  ngOnInit(): void {
  }

}
