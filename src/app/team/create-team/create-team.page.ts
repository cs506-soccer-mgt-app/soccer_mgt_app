import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  // private team: Team = {
  //   name: '',
  //   primary_color: '',
  //   alternate_color: '',
  //   manager_id: 1,
  //   session_id: 2
  // };

    private team = {
      name: '',
      primary_color:'',
      session_id: null,
      alternate_color: '',
      manager_id: null
    }

  constructor(private teamService: TeamService, public http: HttpClient) { }

  ngOnInit() {
  }

  createTeam() {
    // Remember to not hardcode information in the future
    this.teamService.createTeam(this.team.name, this.team.primary_color, 2, 
      this.team.alternate_color, 2).subscribe(data => {
      console.log(data);
    });
  }
}
