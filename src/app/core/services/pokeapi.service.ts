import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../interfaces/Pokemon';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(private readonly httpClient:HttpClient) { }

  getPokemonList(){
    return this.httpClient
    .get<PokemonResponse>(`${this.BASE_URL}pokemon?limit=12&offset=0`)
    .pipe(
      map(
        (response) =>( {
          ...response,
          results : response.results.map(poke => (
            {
              ...poke,
              img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ poke.url.substring(0,poke.url.length-1).split('/').pop()}.png`
            }
          ))
        })
      )
    )
  }

}
