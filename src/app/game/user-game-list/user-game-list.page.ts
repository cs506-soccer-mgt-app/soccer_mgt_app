import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {CognitoService} from '../../services/cognito-service.service';

@Component({
  selector: 'app-user-game-list',
  templateUrl: './user-game-list.page.html',
  styleUrls: ['./user-game-list.page.scss'],
})
export class UserGameListPage implements OnInit {

  public user;
  public userGameList = [];

  constructor(public userService: UserService,
              public cognitoService: CognitoService) { }

  ngOnInit() {
    if (this.cognitoService.isLoggedIn()) {
      this.user = this.cognitoService.getUser();
      // TODO: change to subscription
      this.userGameList = this.userService.getGamesForUser(this.user.idToken.payload['cognito:username']);
    }
  }
}
