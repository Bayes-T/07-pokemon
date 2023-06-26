import { Component, Input } from '@angular/core';

import { Pokemon, PokeInformation, Ability } from '../pokemones.interface';

@Component({
  selector: 'pokemones-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(){
    this.loadData()
  }
  public pokemonList:Pokemon[] = []
  public pokemonDetalle:PokeInformation = {
    abilities:                [{ability: {name: "", url:""}, is_hidden: true, slot:0}],
base_experience:          0,
forms:                    [],
game_indices:             [],
height:                   0,
held_items:               [],
id:                       0,
is_default:               true,
location_area_encounters: "",
moves:                    [],
name:                     "",
order:                    0,
past_types:               [],
stats:                    [],
types:                    [],
weight:                   0
  }

  onNewCharacter(pokemon:Pokemon):void {
    this.pokemonList.push(pokemon)
    this.saveData()
  }

  //DATA PERSISTENTE CON MODO CLASICO, EL LOCALSTORAGE :)
  //EN EL OTRO, DATA PERSISTENTE CON CACHE Y OBSERVABLES

  saveData(){
    localStorage.setItem('list', JSON.stringify (this.pokemonList))
  }

  loadData() {
    if(!localStorage.getItem('list'))return

    this.pokemonList = JSON.parse(localStorage.getItem('list')!)
  }
  
  //Eliminar

  DeletebyId(id:string):void {
    this.pokemonList = this.pokemonList.filter (pokemon => pokemon.id !== id)
  }

  verMas(nombre:string):void {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
    .then(response => response.json())
    .then(data => this.pokemonDetalle = data);
    console.log(this.pokemonDetalle)
  }

  //Y PETICION API PARA VER MÁS
}
