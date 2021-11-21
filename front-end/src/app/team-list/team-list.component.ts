import { Component, OnInit } from '@angular/core';

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

  constructor(
    private teamService: TeamService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
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
    this.getPokemonImages();
    console.log(this.teams);
  }

  getPokemonImages(): void {
    this.teams.forEach(
      team => team.pokemons.forEach(
        pokemon => this.pokemonService.getPokemonByName(pokemon.name)
        .subscribe(poke => pokemon.url = poke.results[0].url)
      ))
  }
}
