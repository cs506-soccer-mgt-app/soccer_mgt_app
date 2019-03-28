import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  constructor(private teamService: TeamService, public http: HttpClient) { }
  
  
private team = {
    alternate_color: '',
    manager_id: null,
    name: '',
    primary_color: '',
    session_id: null,
    team_id: null
    };

    

  ngOnInit() {
    this.team.team_id = 20;
    if (this.team.team_id) {
      this.getTeamDetail(this.team.team_id);
    }
  }

  getTeamDetail(id: number){
    this.teamService.getTeamDetail(20).subscribe(data => {
      // this.teamList[0] = data[0];
      // this.teamList[1] = data[1];
      // this.teamList[2] = data[2];
      // this.teamList[3] = data[3];
      // this.teamList[4] = data[4];
      // this.teamList[5] = data[5];
      //this.team = data;
      
      console.log(data);
    });
  }
}
