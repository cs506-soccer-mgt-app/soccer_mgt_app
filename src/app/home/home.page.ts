import {Component, OnInit} from '@angular/core';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private teamList;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.teamService.getTeams()
        .subscribe(res => {
          this.teamList = res;
        }, err => {
          console.log(err);
        });
  }

}
