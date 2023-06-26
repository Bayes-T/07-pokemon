import { Component } from '@angular/core';
import { Lugar } from '../../lugares.interface';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-lugares-info',
  templateUrl: './lugares-info.component.html',
  styleUrls: ['./lugares-info.component.css']
})
export class LugaresInfoComponent {

  constructor( public lugaresService:LugaresService){}

  public lugar!:Lugar | null

  newPlace(term:string){
    this.lugaresService.RequestPlace(term)
    .subscribe( resp => {
      this.lugar = resp
      console.log(this.lugar)
    })
  }
}
