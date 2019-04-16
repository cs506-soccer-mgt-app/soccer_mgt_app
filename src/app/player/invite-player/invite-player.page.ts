import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvitationService} from '../../services/invitation.service';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.page.html',
  styleUrls: ['./invite-player.page.scss'],
})
export class InvitePlayerPage implements OnInit {

  teamID;
  recipient;

  constructor(public invitationService: InvitationService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  sendInvitation() {
    console.log('sent invite for team: ', this.teamID);
    console.log('sent invite for email: ', this.recipient);
    this.invitationService.sendEmail(this.recipient, this.teamID)
        .subscribe(res => {
          console.log('res', res);
          // on success, toast message
          // then redirect back to team details page
        }, err => {
          console.log(err);
        });
  }

}
