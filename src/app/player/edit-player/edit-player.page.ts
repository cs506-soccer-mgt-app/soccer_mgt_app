import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.page.html',
  styleUrls: ['./edit-player.page.scss'],
})
export class EditPlayerPage implements OnInit {

  public playerID;
  public player;
  public loading;

  constructor(public playerService: PlayerService,
              public route: ActivatedRoute,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) { }

  ngOnInit() {
    this.playerID = this.route.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.playerID) {
      this.playerService.getPlayerDetails(this.playerID)
          .subscribe(res => {
            this.player = res;
          }, err => {
            console.log(err);
          });
    }
  }

  async save() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.playerService.updatePlayer(this.playerID, this.player.user_id, this.player.team_id, this.player.payment)
        .subscribe(async res => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: 'Successfully updated player.',
            duration: 1500,
            position: 'bottom',
            color: 'success'
          });
          toast.present();
          this.navCtrl.navigateBack(['/team-details', this.player.team_id]);
        }, async err => {
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        });
  }

}
