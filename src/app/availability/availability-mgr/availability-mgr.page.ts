import { Component, OnInit } from '@angular/core';
import {AvailabilityService} from '../../services/availability.service';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/game.service';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {CognitoService} from '../../services/cognito-service.service';
import {PlayerService} from '../../services/player.service';
import {TeamService} from '../../services/team.service';

@Component({
  selector: 'app-availability-mgr',
  templateUrl: './availability-mgr.page.html',
  styleUrls: ['./availability-mgr.page.scss'],
})
export class AvailabilityMgrPage implements OnInit {

  public user;
  public gameID;
  public game;
  public playerID;
  public player: any = { user_id: '' };
  public team: any = { manager_id: '' };
  public availability: any = {};
  public loading;

  constructor(public route: ActivatedRoute,
              public gameService: GameService,
              public teamService: TeamService,
              public availabilityService: AvailabilityService,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public navCtrl: NavController,
              public cognitoService: CognitoService,
              public playerService: PlayerService) { }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('game_id');
    this.playerID = this.route.snapshot.paramMap.get('player_id');
    this.user = this.cognitoService.getUser();
  }

  ionViewWillEnter() {
    if (this.gameID && this.playerID) {
      this.load();
    }
  }

  load() {
    this.loadAvailability(this.gameID, this.playerID);
    this.loadPlayer(this.playerID);
    this.loadTeam(this.gameID);
  }

  loadTeam(game_id) {
    this.gameService.getGameDetail(game_id)
        .subscribe(game => {
          this.game = game;
          this.teamService.getTeamDetail(this.game.team_id)
              .subscribe(team => {
                this.team = team;
              });
        }, async err => {
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

  loadPlayer(player_id) {
    this.playerService.getPlayerDetails(player_id)
        .subscribe(res => {
          this.player = res;
        }, async err => {
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

  async loadAvailability(game_id, player_id) {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.availabilityService.getAvailabilityByGameAndPlayer(game_id, player_id)
        .subscribe(res => {
          this.loading.dismiss();
          this.availability = res;
        }, async err => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

  save() {
    if (this.availability.availability_id == null) {
      this.createAvailability();
    } else {
      this.updateAvailability();
    }
  }

  async createAvailability() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.availabilityService.createAvailability(this.gameID, this.playerID, this.availability.availability_type)
        .subscribe(async res => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: 'Successfully set availability.',
            duration: 1500,
            position: 'bottom',
            color: 'success'
          });
          toast.present();
          this.navCtrl.navigateBack(['/game-details', this.gameID]);
        }, async err => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

  async updateAvailability() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.availabilityService.updateAvailability(this.availability.availability_id, this.gameID, this.playerID, this.availability.availability_type)
        .subscribe(async res => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: 'Successfully set availability.',
            duration: 1500,
            position: 'bottom',
            color: 'success'
          });
          toast.present();
          this.navCtrl.navigateBack(['/game-details', this.gameID]);
        }, async err => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

  /**
   * Only allow a team manager or the user that is the player to be able to set their availability.
   */
  canSetAvailability() {
    return this.isTeamManager() || this.isPlayer();
  }

  isPlayer() {
    if (this.user) {
      return this.user.idToken.payload['cognito:username'] === this.player.user_id;
    }
  }

  isTeamManager() {
    if (this.user) {
      return this.user.idToken.payload['cognito:username'] === this.team.manager_id;
    }
  }

}
