import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';
import { CognitoService } from '../../services/cognito-service.service';
import {TeamService} from '../../services/team.service';
<<<<<<< HEAD
import { UserService } from '../../services/user.service';
=======
import { LoadingController, ToastController } from '@ionic/angular';
>>>>>>> dev

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

  loading;
  
  public isenabled:boolean=true;

  constructor(public userService: UserService,
              public gameService: GameService,
              public route: ActivatedRoute,
              public cognitoService: CognitoService,
              public toastCtrl: ToastController,
              public teamService: TeamService,
              public loadingCtrl: LoadingController) { }

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
                this.isManager()
              });
          this.teamService.getPlayersForTeam(this.game.team_id)
              .subscribe(res => {
                const players = [];
                for (const player of Object.values(res)) {
                  players.push(player);
                }
                for (let i = 0; i < players.length; i++) {
                  let firstname = '';
                  let lastname = '';
                  let sex = '';
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

  isManager() {
    if (this.team.manager_id != this.user.idToken.payload['sub']) {
      this.isenabled=false;
    }
  }

  async notifyTeamOfUpcomingGame() {

    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.isenabled=false;
    this.gameService.notifyTeamOfUpcomingGame(this.game.team_id, this.game.date, this.game.time, this.game.opponent, this.game.location)
    .subscribe(async data => {
      this.loading.dismiss();
    }, async err => {
      this.loading.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Error sending email reminder.',
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
      toast.present();
    });
  }

}
