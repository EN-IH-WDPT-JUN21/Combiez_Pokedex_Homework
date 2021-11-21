import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { BackTeam } from '../models/back-team.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = 'http://localhost:8080/teams/';
  
  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<BackTeam[]> {
    return this.http.get<BackTeam[]>(this.baseUrl);
  }

  getTeam(id: number): Observable<Team> {
    console.log(`getTeam a ${this.baseUrl}${id}`)
    return this.http.get<Team>(this.baseUrl + id);
  }
}



