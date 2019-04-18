import {Component, OnInit} from '@angular/core';
import { TeamService } from '../../services/team.service';
import {ActivatedRoute} from '@angular/router';
import { CognitoService } from '../../services/cognito-service.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  public teamID;
  public team;
  public teamGames;
  public user;

  constructor(public userService: UserService,
              public teamService: TeamService,
              public route: ActivatedRoute,
              public cognitoService: CognitoService) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.user = this.cognitoService.getUser();
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
