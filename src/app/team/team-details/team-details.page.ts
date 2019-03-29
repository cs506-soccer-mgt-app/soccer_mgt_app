import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { HttpClient } from '@angular/common/http';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  constructor(private teamService: TeamService, public http: HttpClient) { }
  
  
  private team = {
    alternate_color: "",
    manager_id: null,
    name: "",
    primary_color: "",
    session_id: null,
    team_id: null
    };
  
  private myTeam = null;
  private teamGames = null;

  ngOnInit() {
    // TODO: hard coded
    this.myTeam = 1;
    this.teamGames = 1;
    if (this.team) {
      this.getTeamDetail();
      this.getGamesForTeam();
    }
  }

  getTeamDetail(){
    this.teamService.getTeamDetail(this.myTeam).subscribe(data => {
      this.myTeam = data;
      console.log(this.myTeam);
    });
  }
  
  getGamesForTeam() {
    this.teamService.getGamesForTeam(this.myTeam).subscribe(data => {
      this.teamGames = data;
      console.log(this.teamGames);
    });
  }

}
