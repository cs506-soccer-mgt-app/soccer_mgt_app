import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';
import { CognitoService } from '../../services/cognito-service.service';
import { UserService } from '../../services/user.service';
import { setMaxListeners } from 'cluster';
import { setMaxListeners } from 'cluster';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {

  public gameID = null;
  public game;
  public user;
  public team;
  public teamPlayers = [];

  constructor(public userService: UserService,
              public gameService: GameService,
              public route: ActivatedRoute,
              public cognitoService: CognitoService,
              public teamService: TeamService) { }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.user = this.cognitoService.getUser();
    if (this.gameID) {
      this.loadData();
    }
  }

  loadData() {
    this.gameService.getGameDetail(this.gameID)
        .subscribe(data => {
          this.game = data;
          this.teamService.getTeamDetail(this.game.team_id)
              .subscribe(res => {
                this.team = res;
              });
          this.teamService.getPlayersForTeam(this.game.team_id)
              .subscribe(res => {
                for (let i = 0; i < res.length; i++) {
                  const firstname;
                  const lastname;
                  const sex;
                  for (let j = 0; j < res[i].length; j++) {
                    if (res[i][j].Name == 'custom:firstname') {
                      firstname = res[i][j].Value;
                    }
                    if (res[i][j].Name == 'custom:lastname') {
                      lastname = res[i][j].Value;
                    }
                    if (res[i][j].Name == 'custom:sex') {
                      sex = res[i][j].Value;
                    }
                  }
                  this.teamPlayers.push({
                    firstname: firstname,
                    lastname: lastname,
                    sex: sex
                  });
                }
              });
        });
  }
}
