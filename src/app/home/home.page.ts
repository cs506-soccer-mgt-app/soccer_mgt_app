import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { CognitoService } from '../services/cognito-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public teamList;
  public teamSub: Subscription;
  public user;

  constructor(public userService: UserService,
              public cognitoService: CognitoService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.teamSub !== undefined) {
      this.teamSub.unsubscribe();
    }
  }

  ionViewWillEnter() {
    this.user = this.cognitoService.getUser();
    this.teamSub = this.userService.getTeamsForUser(this.user.idToken.payload['cognito:username'])
        .subscribe(res => {
          this.teamList = res;
        }, err => {
          console.log(err);
        });
  }

}
