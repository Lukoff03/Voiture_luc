import { Injectable } from '@angular/core';
import { BananeService } from './banane.service';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  prixResto:number | undefined;

  name:string = "Le beBio";
  constructor(private banane:BananeService) { }

  getPrice(){
    return this.prixResto = this.banane.prix * 1.14;
  }
}
