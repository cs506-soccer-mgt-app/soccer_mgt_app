import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {CognitoService} from '../../services/cognito-service.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-user-game-list',
  templateUrl: './user-game-list.page.html',
  styleUrls: ['./user-game-list.page.scss'],
})
export class UserGameListPage implements OnInit {

  public user;
  public userGameList = [];

  constructor(public userService: UserService,
              public cognitoService: CognitoService,
              public toastCtrl: ToastController) { }

  ngOnInit() {
    if (this.cognitoService.isLoggedIn()) {
      this.user = this.cognitoService.getUser();
      this.userService.getGamesForUser(this.user.idToken.payload['cognito:username'])
          .subscribe(res => {
            for (const game of Object.values(res)) {
              this.userGameList.push(game);
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
}
