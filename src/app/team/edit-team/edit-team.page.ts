import {Component, OnInit} from '@angular/core';
import { TeamService } from '../../services/team.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {

  public teamID;
  public team;


  constructor(public teamService: TeamService,
              public route: ActivatedRoute,
              public navCtrl: NavController) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.teamID) {
      this.getTeamDetail(this.teamID);
    }
  }

  updateTeam() {
    this.teamService.updateTeam(this.teamID, this.team.name, this.team.primary_color,
      this.team.session_id, this.team.alternate_color, this.team.manager_id)
        .subscribe(data => {
          this.navCtrl.navigateBack(['/team-details', this.teamID]);
        }, err => {
          console.log(err);
        });
  }

  getTeamDetail(id: number) {
    this.teamService.getTeamDetail(id)
        .subscribe(res => {
          this.team = res;
        }, err => {
          console.log(err);
        });
  }

}
