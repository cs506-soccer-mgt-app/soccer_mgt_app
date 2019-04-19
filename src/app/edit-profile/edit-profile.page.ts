import { Component, OnInit } from '@angular/core';

// User defined
import { CognitoService} from '../services/cognito-service.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  user;

  email: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  sex: string;

  loading;

  constructor(
    public cognitoService: CognitoService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.user = this.cognitoService.getUser();
    this.email = this.user.idToken.payload['email']
    this.firstname = this.user.idToken.payload['custom:firstname']
    this.lastname = this.user.idToken.payload['custom:lastname']
    this.phonenumber = this.user.idToken.payload['phone_number']
    this.sex = this.user.idToken.payload['custom:sex']
  }

  async editProfile() {
    // display a loading component while making the signUp call to AWS
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.cognitoService.editProfile(this.email, this.firstname, this.lastname, this.phonenumber, this.sex).then(
      res => {
        this.cognitoService.logout();
        this.navCtrl.navigateBack('/login');
        // dismiss loading component when successful result comes back
        this.loading.dismiss();
      },
      async err => {

        // dismiss loading component when unsuccessful error comes back
        this.loading.dismiss();

        // display error message
        // console.log(err)
        const toast = await this.toastCtrl.create({
          message: err.message,
          duration: 6000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();

    });

  }

}
