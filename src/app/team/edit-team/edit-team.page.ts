import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {

  private team = {
    id: null,
    name: '',
    primary_color:'',
    session_id: null,
    alternate_color:'',
    manager_id: null
  }

  constructor(private teamService: TeamService, public http: HttpClient) { }

  ngOnInit() {
  }
  updateTeam() {
    this.teamService.updateTeam(21, this.team.name, this.team.primary_color,
      3, this.team.alternate_color, 2).subscribe(data => {
        console.log(data);
      });
  }

}
