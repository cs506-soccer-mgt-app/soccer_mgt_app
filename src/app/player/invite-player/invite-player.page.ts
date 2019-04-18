import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvitationService} from '../../services/invitation.service';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-invite-player',
  templateUrl: './invite-player.page.html',
  styleUrls: ['./invite-player.page.scss'],
})
export class InvitePlayerPage implements OnInit {

  teamID;
  recipient;

  loading;

  constructor(public invitationService: InvitationService,
              public route: ActivatedRoute,
              public toastCtrl: ToastController,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  async sendInvitation() {
    // display a loading component while making the invitation call to AWS
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.invitationService.sendEmail(this.recipient, this.teamID)
        .subscribe(async res => {
          // dismiss loading component when successful result comes back; display success message
          this.loading.dismiss();
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
          // dismiss loading component when unsuccessful error comes back; display error message
          this.loading.dismiss();
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
