import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvitationService} from '../../services/invitation.service';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.page.html',
  styleUrls: ['./invite-player.page.scss'],
})
export class InvitePlayerPage implements OnInit {

  teamID;
  recipient;

  constructor(public invitationService: InvitationService,
              public route: ActivatedRoute,
              public toastCtrl: ToastController,
              public navCtrl: NavController) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  sendInvitation() {
    this.invitationService.sendEmail(this.recipient, this.teamID)
        .subscribe(async res => {
          console.log(res);
          // on success, create toast message
          const toast = await this.toastCtrl.create({
            message: 'Successfully sent email invitation.',
            duration: 3000,
            position: 'bottom',
            color: 'success'
          });
          toast.present();
          // then redirect back to team details page
          this.navCtrl.navigateBack(['/team-details', this.teamID]);
        }, async err => {
          console.log(err);
          // on failure, create toast message
          const toast = await this.toastCtrl.create({
            message: 'Error sending email invitation.',
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

}
