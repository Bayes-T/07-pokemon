import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Lugar } from 'src/app/lugares/lugares.interface';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('placeInput')  inputDOM!:ElementRef<HTMLInputElement>

  public lugar:string = ""
  public termino:string = ""


  @Output()
  onNewPlace:EventEmitter<string> = new EventEmitter
  searchPlace (term:string):void {
    this.lugar = term
    this.onNewPlace.emit(term)
  }
}
