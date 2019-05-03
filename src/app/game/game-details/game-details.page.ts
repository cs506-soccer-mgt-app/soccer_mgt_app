import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';
import { CognitoService } from '../../services/cognito-service.service';
import {TeamService} from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { LoadingController, ToastController } from '@ionic/angular';
import {AvailabilityService} from '../../services/availability.service';

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

  loading;
  
  public isenabled:boolean=true;

  public displayPlayers = [];

  public inPlayersChecked = true
  public outPlayersChecked = true
  public maybePlayersChecked = true
  public unknownPlayersChecked = true

  public inPlayers = [];
  public outPlayers = [];
  public maybePlayers = [];
  public unknownPlayers = [];
  public allPlayers = [];

  constructor(public gameService: GameService,
              public route: ActivatedRoute,
              public cognitoService: CognitoService,
              public toastCtrl: ToastController,
              public teamService: TeamService,
              public loadingCtrl: LoadingController,
              public availabilityService: AvailabilityService) { }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.user = this.cognitoService.getUser();
    if (this.gameID) {
      this.loadData();
    }
  }

  updateIN() {
    if (this.inPlayersChecked) {
      this.inPlayersChecked = false
    } else {
      this.inPlayersChecked = true
    }
    console.log(this.inPlayersChecked)
    this.updateDisplayPlayers();
  }

  updateOUT() {
    if (this.outPlayersChecked) {
      this.outPlayersChecked = false
    } else {
      this.outPlayersChecked = true
    }
    this.updateDisplayPlayers();
  }

  updateUNKNOWN() {
    if (this.unknownPlayersChecked) {
      this.unknownPlayersChecked = false
    } else {
      this.unknownPlayersChecked = true
    }
    this.updateDisplayPlayers();
  }

  updateMAYBE() {
    if (this.maybePlayersChecked) {
      this.maybePlayersChecked = false
    } else {
      this.maybePlayersChecked = true
    }
    this.updateDisplayPlayers();
  }

  updateDisplayPlayers() {
    this.displayPlayers = []
    if (this.inPlayersChecked) {
      for (let i = 0; i < this.inPlayers.length; i++) {
        this.displayPlayers.push(this.inPlayers[i])
      }
    }
    if (this.outPlayersChecked) {
      for (let i = 0; i < this.outPlayers.length; i++) {
        this.displayPlayers.push(this.outPlayers[i])
      }
    }
    if (this.maybePlayersChecked) {
      for (let i = 0; i < this.maybePlayers.length; i++) {
        this.displayPlayers.push(this.maybePlayers[i])
      }
    }
    if (this.unknownPlayersChecked) {
      for (let i = 0; i < this.unknownPlayers.length; i++) {
        this.displayPlayers.push(this.unknownPlayers[i])
      }
    }
    if (!this.inPlayersChecked && !this.outPlayersChecked && !this.maybePlayersChecked && !this.unknownPlayersChecked) {
      this.displayPlayers = []
      for (let i = 0; i < this.allPlayers.length; i++) {
        this.displayPlayers.push(this.allPlayers[i])
      }
    }
    this.displayPlayers.sort(this.compareByName);
  }

  loadData() {
    this.gameService.getGameDetail(this.gameID)
        .subscribe(data => {
          this.game = data;
          this.teamService.getTeamDetail(this.game.team_id)
              .subscribe(res => {
                this.team = res;
                this.isManager();
              });
          this.teamService.getPlayersForTeam(this.game.team_id)
              .subscribe(res => {
                const players = [];
                for (const player of Object.values(res)) {
                  players.push(player);
                }

                this.displayPlayers = [];
                this.inPlayers = [];
                this.outPlayers = [];
                this.maybePlayers = [];
                this.unknownPlayers = [];
                this.allPlayers = [];

                for (let i = 0; i < players.length; i++) {
                  let firstname = '';
                  let lastname = '';
                  let sex = '';
                  let player_id;
                  for (let j = 0; j < res[i].length; j++) {
                    if (res[i][j].Name === 'custom:firstname') {
                      firstname = res[i][j].Value;
                    }
                    if (res[i][j].Name === 'custom:lastname') {
                      lastname = res[i][j].Value;
                    }
                    if (res[i][j].Name === 'custom:sex') {
                      sex = res[i][j].Value;
                    }
                    if (res[i][j].Name === 'player') {
                      player_id = res[i][j].Value.player_id;
                    }
                  }
                  let availability = null;
                  this.availabilityService.getAvailabilityByGameAndPlayer(this.gameID, player_id)
                      .subscribe(res => {
                        availability = res;
                        if (availability.availability_type == "IN") {
                          this.inPlayers.push({
                            firstname: firstname,
                            lastname: lastname,
                            sex: sex,
                            player_id: player_id,
                            availability_type: availability.availability_type
                          });
                        } else if (availability.availability_type == "OUT") {
                          this.outPlayers.push({
                            firstname: firstname,
                            lastname: lastname,
                            sex: sex,
                            player_id: player_id,
                            availability_type: availability.availability_type
                          });
                        } else if (availability.availability_type == "MAYBE") {
                          this.maybePlayers.push({
                            firstname: firstname,
                            lastname: lastname,
                            sex: sex,
                            player_id: player_id,
                            availability_type: availability.availability_type
                          });
                        } else {
                          this.unknownPlayers.push({
                            firstname: firstname,
                            lastname: lastname,
                            sex: sex,
                            player_id: player_id,
                            availability_type: availability.availability_type
                          });
                        }

                        this.allPlayers.push({
                          firstname: firstname,
                          lastname: lastname,
                          sex: sex,
                          player_id: player_id,
                          availability_type: availability.availability_type
                        });

                        this.displayPlayers.push({
                          firstname: firstname,
                          lastname: lastname,
                          sex: sex,
                          player_id: player_id,
                          availability_type: availability.availability_type
                        });

                      this.displayPlayers.sort(this.compareByName);
                      }, err => {
                        console.log(err);
                      });
                }
              });
        });
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
