import { Component, OnInit } from '@angular/core';
import { PokeapiService } from './core/services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
