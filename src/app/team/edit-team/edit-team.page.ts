import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {

  private team;
  private teamID;

  // private team = {
  //   team_id: null,
  //   name: '',
  //   primary_color:'',
  //   session_id: null,
  //   alternate_color:'',
  //   manager_id: null
  // }

  constructor(private teamService: TeamService, public http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO -- Hardcoded team ID
    // this.changeTeam = 1;
    this.teamID = this.route.snapshot.paramMap.get('id');
    if (this.teamID) {
      this.getTeamDetail();
    }
  }

  updateTeam() {
    console.log(this.team);
    this.teamService.updateTeam(this.teamID, this.team.name, this.team.primary_color,
      this.team.session_id, this.team.alternate_color, this.team.manager_id).subscribe(data => {
        console.log(data);
      });
  }

  getTeamDetail(){
    this.teamService.getTeamDetail(this.teamID).subscribe(data => {
      this.team = data;
      console.log(this.team);
    });
  }

}
