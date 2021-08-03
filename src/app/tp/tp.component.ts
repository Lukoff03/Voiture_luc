import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {

  title:string = "Nos vehicules";
  carUpdate:any;
  carOne:any = {
    name: "pagani huayra",
    pays: "italie",
    power: "765",
    perf: 3.2
  }
  carTwo:any = {
    name: "koenigsegg agera rs",
    pays: "suède",
    power: 1383,
    perf: 2.6
  }
  carThree:any = {
    name: "zenvo tsr s",
    pays: "danemark",
    power: "1200",
    perf: 2.8
  }
  constructor() { }

  ngOnInit(): void {
    this.carUpdate = new Date();
  }

}
