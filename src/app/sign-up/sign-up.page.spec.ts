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

  it('should contain a verifyUser() method with a verification code as a parameter', () => {
    const verCode = 12345;
    const cmpntSpy = spyOn(component, 'verifyUser').and.callThrough();
    expect(component.verifyUser(verCode)).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalledWith(verCode);
  });

  // Add test for register();
});
