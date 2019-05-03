import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage } from './sign-up.page';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {IonicModule} from '@ionic/angular';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), FormsModule, IonicModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/sign-up' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined navCtrl: NavController varaible', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined alertController: AlertController varaible', () => {
    expect(component.alertController).toBeDefined();
  });

  it('should have a defined cognitoController: CognitoController varaible', () => {
    expect(component.cognitoService).toBeDefined();
  });

  it('should have a defined loadingCtrl: LoadingCognito varaible', () => {
    expect(component.loadingCtrl).toBeDefined();
  });

  it('should have a defined toastCtrl: ToastController varaible', () => {
    expect(component.toastCtrl).toBeDefined();
  });

  it('should have a defined resgister() method', () => {
    return new Promise(function(resolve, reject) {
      
      const cmpntySpy = spyOn(component, 'register').and.returnValue(Promise.resolve(true));
      expect(component.register()).toBeDefined();
      expect(cmpntySpy).toHaveBeenCalled();
      resolve();
    });
  });

  it('should have a defined promptVerificationCode() method', () => {
    return new Promise(function(resolve, reject) {
      
      const cmpntySpy = spyOn(component, 'promptVerificationCode').and.returnValue(Promise.resolve(true));
      expect(component.promptVerificationCode()).toBeDefined();
      expect(cmpntySpy).toHaveBeenCalled();
      resolve();
    });
  });

  it('should have a defined verifyUser() method', () => {
    return new Promise(function(resolve, reject) {
      const verifyCode = 34
      const cmpntySpy = spyOn(component, 'verifyUser').and.returnValue(Promise.resolve(true));
      expect(component.verifyUser(verifyCode)).toBeDefined();
      expect(cmpntySpy).toHaveBeenCalledWith(verifyCode);
      resolve();
    });
  });
});
