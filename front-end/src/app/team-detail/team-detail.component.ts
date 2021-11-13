import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team, teams } from '../models/team';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team | undefined;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const teamId = Number(routeParams.get('id'));

    this.team = teams.find(team => team.id === teamId);
  }

}
