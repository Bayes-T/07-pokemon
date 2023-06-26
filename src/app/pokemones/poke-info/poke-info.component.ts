import { Component, Input } from '@angular/core';
import { PokeInformation, Pokemon } from '../pokemones.interface';

@Component({
  selector: 'poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent {

  @Input()
  public pokemon!:PokeInformation
}
