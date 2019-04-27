import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CognitoService} from '../../services/cognito-service.service';
import {ToastController} from '@ionic/angular';
import {AvailabilityService} from '../../services/availability.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-game-list',
  templateUrl: './user-game-list.page.html',
  styleUrls: ['./user-game-list.page.scss'],
})
export class UserGameListPage implements OnInit, OnDestroy {

  public user;
  public userGameList = [];
  public gameListSub: Subscription;
  public availabilitySub: Subscription;

  constructor(public userService: UserService,
              public cognitoService: CognitoService,
              public toastCtrl: ToastController,
              public availabilityService: AvailabilityService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.gameListSub !== undefined && this.availabilitySub !== undefined) {
      this.gameListSub.unsubscribe();
      this.availabilitySub.unsubscribe();
    }
  }

  ionViewWillEnter() {
    if (this.cognitoService.isLoggedIn()) {
      this.user = this.cognitoService.getUser();
      this.loadData();
    }
  }

  loadData() {
    this.userGameList = [];
    this.gameListSub = this.userService.getGamesForUser(this.user.idToken.payload['cognito:username'])
        .subscribe(res => {
          for (const game of Object.values(res)) {
            let availability = null;
            this.availabilitySub = this.availabilityService.getAvailabilityByGameAndPlayer(game.game_id, game.player_id)
                .subscribe(res => {
                  availability = res;
                  game.availability_type = availability.availability_type;
                  this.userGameList.push(game);
                }, err => {
                  console.log(err);
                });
          }
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
}
