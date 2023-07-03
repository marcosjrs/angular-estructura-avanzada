import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../core/services/pokeapi.service';
import { Pokemon } from '../core/interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private readonly pokeSvc:PokeapiService){}

  ngOnInit(): void {
    this.pokeSvc.getPokemonList().subscribe(
      {
        next:(pokes) => this.pokemons = pokes.results,
        error:(err) => console.log('Error', err)
      }
    )
  }

}
