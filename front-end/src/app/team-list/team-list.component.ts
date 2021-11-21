import { Component, OnInit } from '@angular/core';
import { InterfaceList } from '../interfaces/list';

import { Result } from '../models/result.model';
import { Team } from '../models/team.model';
import { PokemonService } from '../service/pokemon.service';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];
  teamPokemon : Result[] = [];
  allPokemons : Result[] = [];

  constructor(
    private teamService: TeamService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teamService.getTeams().subscribe(
      teams => teams.forEach(
        team => this.teams.push(
          new Team(team.id, team.owner, team.pokemons.map(poke => {
            let rObj = new Result('', '');
            rObj.name = poke;
            return rObj }))
        )
      )
    );
    this.getAllPokemon();
    this.getPokemonImages();
  }

  getAllPokemon(): void {
    this.pokemonService.getAllPokemon().subscribe(
      result => result.results.forEach(
        pokemon => this.allPokemons.push(new Result(pokemon.name, pokemon.url))));
  }

  getPokemonImages(): void {
    this.teams.forEach(
      team => team.pokemons.forEach(  
        pokemon => { this.pokemonService.getPokemon(this.allPokemons.find(poke => poke.name.includes(pokemon.name.substring(0, 8)))!.url)
        .subscribe(foundPoke => pokemon.url = foundPoke.sprites.front_default);
        console.log(pokemon.name);
        }
      ))
  }
}
