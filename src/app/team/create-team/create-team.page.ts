import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

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
    // Handle missing information routing
    if (this.team.name == "" || this.team.primary_color == "" || this.team.alternate_color == "" || this.team.session_id == null) {
      alert("Please input infomration");   
    } else {
      this.teamService.createTeam(this.team.name, this.team.primary_color, this.team.session_id, 
        this.team.alternate_color, 2).subscribe(data => {
        console.log(data);
      });
    } 
  }
}
