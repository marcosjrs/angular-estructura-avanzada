import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent
  ],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonListModule { }
