import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonListModule { }
