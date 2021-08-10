import { Component, OnInit } from '@angular/core';
import { RestoService } from '../service/resto.service';
import { BananeService } from '../service/banane.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string = "Drive-X";
  fruit:string = this.banane.getFruit();
  prixResto:number = this.resto.getPrice();

  userName:any;
  constructor(private banane:BananeService,
              private resto:RestoService) {
    console.log(banane.getFruit())
    console.log(this.resto.name)
  }

  ngOnInit(): void {
  }

}
