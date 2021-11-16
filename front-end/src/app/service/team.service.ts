import { Injectable } from '@angular/core';
import { Team } from '../models/team';
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

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl);
  }

  getTeam(id: number): Observable<Team> {
    console.log(`getTeam a ${this.baseUrl}${id}`)
    return this.http.get<Team>(this.baseUrl + id);
  }
}



