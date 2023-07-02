import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  BASE_URL = 'https://pokeapi.co/api/v2/';

  constructor(private readonly httpClient:HttpClient) { }

  getPokemonList(){
    return this.httpClient.get<PokemonResponse>(`${this.BASE_URL}pokemon?limit=100&offset=0`);
  }
}
