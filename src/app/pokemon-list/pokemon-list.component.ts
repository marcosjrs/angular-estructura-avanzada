import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../core/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(private readonly pokeSvc:PokeapiService){}

  ngOnInit(): void {
    this.pokeSvc.getPokemonList().subscribe(
      {
        next:(pokes) => console.log(pokes.results),
        error:(err) => console.log('Error', err)
      }
    )
  }

}
