
import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { CognitoService} from '../services/cognito-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  sex: string;

  loading;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public cognitoService: CognitoService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
  }

  async register() {
    // display a loading component while making the signUp call to AWS
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.cognitoService.signUp(this.email, this.password, this.firstname, this.lastname, this.phonenumber, this.sex).then(
        res => {
          // dismiss loading component when successful result comes back
          this.loading.dismiss();
          this.promptVerificationCode();
        },
        async err => {
          // dismiss loading component when unsuccessful error comes back; display message
          this.loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: err.message,
            duration: 6000,
            position: 'bottom',
            color: 'danger'
          });
          toast.present();
        }
    );
  }

  async promptVerificationCode() {

      const alert = await this.alertController.create({
        message: "Check Email for Verfication Code",
        inputs: [
          {
            name: "VerificationCode",
            placeholder: "Verification Code"
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: data => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Verify",
            handler: data => {
              this.verifyUser(data.VerificationCode);
            }
          }
        ]
      });
    await alert.present();
  }

  verifyUser(verificationCode) {
    this.cognitoService.confirmUser(verificationCode, this.email).then(
      async res => {
        // dismiss loading component when successful result comes back; display success message
        this.loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Successfully created user.',
          duration: 3000,
          position: 'bottom',
          color: 'success'
        });
        toast.present();
        this.navCtrl.navigateBack('/login');
      },
      err => {
        // dismiss loading component when unsuccessful error comes back
        this.loading.dismiss();
        alert(err.message);
      }
    );
  }

}
