import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {CognitoService} from '../../services/cognito-service.service';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.page.html',
  styleUrls: ['./join-team.page.scss'],
})
export class JoinTeamPage implements OnInit {

  teamID;

  constructor(public playerService: PlayerService,
              public cognitoService: CognitoService,
              public toastCtrl: ToastController,
              public navCtrl: NavController) { }

  ngOnInit() {
  }

  joinTeam() {
    const user = this.cognitoService.getUser();
    this.playerService.createPlayer(user.idToken.payload['cognito:username'], this.teamID, '0')
        .subscribe(async res => {
          // display success message
          const toast = await this.toastCtrl.create({
            message: 'Successfully joined team.',
            duration: 3000,
            position: 'bottom',
            color: 'success'
          });
          toast.present();
          // navigate back to home page
          this.navCtrl.navigateBack('/home');
        }, async err => {
          // display error message
          const toast = await this.toastCtrl.create({
            message: 'Error joining team.',
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

}
