import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from '../services/team.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public teamList;
  public teamSub: Subscription;

  constructor(public teamService: TeamService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ionViewWillEnter() {
    this.teamSub = this.teamService.getTeams()
        .subscribe(res => {
          this.teamList = res;
        }, err => {
          console.log(err);
        });
  }

}
