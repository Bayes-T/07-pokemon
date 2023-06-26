import { Component, EventEmitter, Output } from '@angular/core';

import { Pokemon } from 'src/app/pokemones/pokemones.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'shared-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public newPokemon:Pokemon = {
    id: "",
    pokemon: "",
    tipo: "",
    poder: 0
  }

  @Output () public onNewPokemon:EventEmitter<Pokemon>= new EventEmitter

  InputForm():void {
    this.newPokemon.id = uuid()
    this.onNewPokemon.emit(this.newPokemon)
    this.newPokemon = {
      id: "",
      pokemon: "",
      tipo: "",
      poder: 0
    }
  }
}
