
import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';

import { CognitoService} from "../services/cognito-service.service";


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

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public CognitoService: CognitoService
  ) {}

  ngOnInit() {
  }

  register() {
    this.CognitoService.signUp(this.email, this.password, this.firstname, this.lastname, this.phonenumber, this.sex).then(
      res => {
        this.promptVerificationCode();
      },
      err => {
        console.log(err);
      }
    );
  }

  async promptVerificationCode() {

      const alert = await this.alertController.create({
        message: "Enter Verfication Code",
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
    this.CognitoService.confirmUser(verificationCode, this.email).then(
      res => {
        console.log(res);
        this.navCtrl.navigateBack('/login');
      },
      err => {
        alert(err.message);
      }
    );
  }

}
