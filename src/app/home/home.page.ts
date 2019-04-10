import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { CognitoService } from "../services/cognito-service.service";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private teamList;
  private teamSub: Subscription;

  constructor(public userService: UserService, public cognitoService: CognitoService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.teamSub.unsubscribe;
  }

  ionViewWillEnter() {
    const user = this.cognitoService.getUser();
    this.teamSub = this.userService.getTeamsForUser(user.idToken.payload['cognito:username'])
        .subscribe(res => {
          this.teamList = res;
        }, err => {
          console.log(err);
        });
  }

}
