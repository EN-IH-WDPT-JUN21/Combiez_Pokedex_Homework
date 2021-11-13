import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';
import { teams } from '../models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams = teams;

  constructor() { }

  ngOnInit(): void {
  }

}
