import {Component, OnInit} from '@angular/core';
import { TeamService } from '../../services/team.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  constructor(public teamService: TeamService,
              public route: ActivatedRoute) { }

  teamID;
  team;
  teamGames;


  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
      if (this.teamID) {
          this.getTeamDetail(this.teamID);
          this.getGamesForTeam(this.teamID);
      }
  }

  getTeamDetail(id: number) {
    this.teamService.getTeamDetail(id)
        .subscribe(res => {
            this.team = res;
        }, err => {
            console.log(err);
        });
  }

  getGamesForTeam(id: number) {
    this.teamService.getGamesForTeam(id)
        .subscribe(res => {
            this.teamGames = res;
        }, err => {
            console.log(err);
        });
  }

}
