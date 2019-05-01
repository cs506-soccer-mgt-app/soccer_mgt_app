import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePage } from './edit-profile.page';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('EditProfilePage', () => {
  let component: EditProfilePage;
  let fixture: ComponentFixture<EditProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), FormsModule, IonicModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/edit-profile' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined cognitoService: CognitoService variable', () => {
    expect(component.cognitoService).toBeDefined();
  });

  it('should have a defined loadingCtrl: LoadingController variable', () => {
    expect(component.loadingCtrl).toBeDefined();
  });

  it('should have a defined toastCtrl: ToastController variable', () => {
    expect(component.toastCtrl).toBeDefined();
  });

  it('should have a defined navCtrl: NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });
});
