
import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../services/cognito-service.service';
import {LoadingController, NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  loading;

  constructor(public cognitoService: CognitoService,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async login() {
    // display a loading component while making the signUp call to AWS
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.cognitoService.authenticate(this.email, this.password)
        .then(res => {
          this.loading.dismiss();
          this.navCtrl.navigateBack('/home');
        }, async err => {
          // dismiss loading component when unsuccessful error comes back; display message
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
