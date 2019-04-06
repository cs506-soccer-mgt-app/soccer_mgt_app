import { Injectable } from '@angular/core';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  _POOL_DATA = {
    UserPoolId: "us-east-2_pJjcANPag",
    ClientId: "46o4uc4s3ap9294dj3ri0l3q3s"
  };

  public user;

  constructor() { }

  signUp(email, password, firstname, lastname, phonenumber, sex) {

    return new Promise((resolved, reject) => {
      const userPool = new AmazonCognitoIdentity.CognitoUserPool(this._POOL_DATA);

      let userAttribute = [];
      userAttribute.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email })
      );
      userAttribute.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "custom:firstname", Value: firstname })
      );
      userAttribute.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "custom:lastname", Value: lastname })
      );
      userAttribute.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "phone_number", Value: phonenumber })
      );
      userAttribute.push(
        new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "custom:sex", Value: sex })
      );

      userPool.signUp(email, password, userAttribute, null, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolved(result);
        }
      });

    });

  }

  confirmUser(verificationCode, userName) {
    return new Promise((resolved, reject) => {
      const userPool = new AmazonCognitoIdentity.CognitoUserPool(this._POOL_DATA);

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: userName,
        Pool: userPool
      });

      cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolved(result);
        }
      });
    });
  }

  authenticate(email, password) {
    return new Promise((resolved, reject) => {
      const userPool = new AmazonCognitoIdentity.CognitoUserPool(this._POOL_DATA);

      const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: email,
        Password: password
      });

      const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: email,
        Pool: userPool
      });

      cognitoUser.authenticateUser(authDetails, {
        onSuccess: result => {
          resolved(result);
          this.setUser(result);
          //console.log(result);
        },
        onFailure: err => {
          reject(err);
        },
        newPasswordRequired: userAttributes => {

          userAttributes.email = email;
          delete userAttributes.email_verified;

          cognitoUser.completeNewPasswordChallenge(password, userAttributes, {
            onSuccess: function(result) {},
            onFailure: function(error) {
              reject(error);
            }
          });
        }
      });
    });
  }

  setUser(cognitoUser) {
    // this.user.userID = cognitoUser.idToken.payload['cognito:username'];
    // this.user.firstname = cognitoUser.idToken.payload['cognito:firstname'];
    // this.user.lastname = cognitoUser.idToken.payload['cognito:lastname'];
    // this.user.phonenumber = cognitoUser.idToken.payload['cognito:phonenumber'];
    // this.user.email = cognitoUser.idToken.payload['cognito:email'];
    // this.user.sex = cognitoUser.idToken.payload['cognito:sex'];

    this.user = cognitoUser;
    
    console.log(cognitoUser.idToken.payload['cognito:username']);

    //console.log(this.user);
  }

  getUser() {
    return this.user;
  }
}
