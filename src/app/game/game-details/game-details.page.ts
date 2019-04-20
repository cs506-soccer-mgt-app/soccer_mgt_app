import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';
import { CognitoService } from '../../services/cognito-service.service';
import { UserService } from '../../services/user.service';
import {TeamService} from '../../services/team.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {

  public items: Array<{ title: string; icon: string }> = [];
  public gameID = null;
  public game;
  public user;
  public team;
  
  public isenabled:boolean=true;

  constructor(public userService: UserService,
              public gameService: GameService,
              public route: ActivatedRoute,
              public cognitoService: CognitoService,
              public toastCtrl: ToastController,
              public teamService: TeamService) { }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.user = this.cognitoService.getUser();
    if (this.gameID) {
      this.loadData();
    }
    this.items = [];
    for (let i = 1; i < 6; i++) {
      this.items.push({
        title: 'Player ' + i,
        icon: 'football'
      });
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
        });
  }

  isManager() {
    if (this.team.manager_id != this.user.idToken.payload['sub']) {
      this.isenabled=false;
    }
  }

  async notifyTeamOfUpcomingGame() {
    this.isenabled=false;
    this.gameService.notifyTeamOfUpcomingGame(this.game.team_id, this.game.date, this.game.time, this.game.opponent, this.game.location)
    .subscribe(async data => {
    }, async err => {
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
