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
  public teamPlayers;

  constructor(public teamService: TeamService,
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
        this.getPlayersForTeam(this.teamID);
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
            this.teamGames.sort(this.compareByDate);
        }, err => {
            console.log(err);
        });
  }

  compareByDate(a, b) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      let comparison = 0;
      if (dateA > dateB) {
          comparison = 1;
      } else if (dateA < dateB) {
          comparison = -1;
      }
      return comparison;
  }

  getPlayersForTeam(id: number) {
      this.teamService.getPlayersForTeam(id)
          .subscribe(res => {
              const players = [];
              for (const player of Object.values(res)) {
                  players.push(player);
              }
              this.teamPlayers = [];
              for (let i = 0; i < players.length; i++) {
                  let firstname;
                  let lastname;
                  let payment;
                  let player_id;
                  for (let j = 0; j < res[i].length; j++) {
                      if (res[i][j].Name === 'custom:firstname') {
                          firstname = res[i][j].Value;
                      }
                      if (res[i][j].Name === 'custom:lastname') {
                          lastname = res[i][j].Value;
                      }
                      if (res[i][j].Name === 'player') {
                          player_id = res[i][j].Value.player_id;
                          payment = res[i][j].Value.payment;
                      }
                  }
                  this.teamPlayers.push({
                      firstname: firstname,
                      lastname: lastname,
                      player_id: player_id,
                      payment: payment
                  });
                  this.teamPlayers.sort(this.compareByName);
              }
          }, err => {
              console.log(err);
          });
  }

  isManager() {
      return this.team.manager_id === this.user.idToken.payload['cognito:username'];
  }

  compareByName(a, b) {
      const nameA = a.firstname.toLowerCase() + ' ' + a.lastname.toLowerCase();
      const nameB = b.firstname.toLowerCase() + ' ' + b.lastname.toLowerCase();

      let comparison = 0;
      if (nameA > nameB) {
          comparison = 1;
      } else if (nameA < nameB) {
          comparison = -1;
      }
      return comparison;
  }

}
