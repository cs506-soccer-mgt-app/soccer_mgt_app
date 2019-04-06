
import { Component, OnInit } from '@angular/core';
import { CognitoService } from "../services/cognito-service.service";
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(public cognitoService: CognitoService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.cognitoService.authenticate(this.email, this.password)
    .then(res =>{
      this.navCtrl.navigateBack('/home');
    }, err =>{
      console.log(err);
    });
  }

}
