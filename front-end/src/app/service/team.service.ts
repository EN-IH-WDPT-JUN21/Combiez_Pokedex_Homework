import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamList: Team[] = [];

  constructor() { }

  getTeams() {
    return this.teamList;
  }
}



