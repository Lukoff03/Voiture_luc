import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
  drivers: any = this.data.getAllDrivers();
  constructor(private data:DataService) { console.log(this.drivers)}
  
  ngOnInit(): void {
  }
  title:string = "liste des pilotes";
  
  
  
}
