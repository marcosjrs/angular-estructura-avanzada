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
  showLoader = true;
  constructor(private readonly pokeSvc:PokeapiService){}

  ngOnInit(): void {
    this.showLoader = true;
    this.pokeSvc.getPokemonList().subscribe(
      {
        next:(pokes) => this.pokemons = pokes.results,
        error:(err) => this.showLoader = false,
        complete: () => this.showLoader = false
      }
    )
  }

}
