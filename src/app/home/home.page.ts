import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from '../services/team.service';
import {Subscription} from 'rxjs';
import { CognitoService } from "../services/cognito-service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private teamList;
  private teamSub: Subscription;

  constructor(private teamService: TeamService, public cognitoService: CognitoService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ionViewWillEnter() {
    const user = this.cognitoService.getUser();
    console.log('user', user);
    //this.teamSub = this.teamService.getTeamsForUser(user.idToken.payload['cognito:username'])
    this.teamSub =this.teamService.getTeams()
        .subscribe(res => {
          this.teamList = res;
        }, err => {
          console.log(err);
        });
  }

}
