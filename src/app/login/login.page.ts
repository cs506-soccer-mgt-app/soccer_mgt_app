
import { Component, OnInit } from '@angular/core';
import { CognitoService } from "../services/cognito-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(public CognitoService: CognitoService) { }

  ngOnInit() {
  }

  login(){
    this.CognitoService.authenticate(this.email, this.password)
    .then(res =>{
      console.log(res);
    }, err =>{
      console.log(err);
    });
  }

}
