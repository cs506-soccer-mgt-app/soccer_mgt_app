import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePlayerPage } from './invite-player.page';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';

describe('InvitePlayerPage', () => {
  let component: InvitePlayerPage;
  let fixture: ComponentFixture<InvitePlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitePlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
          RouterModule.forRoot([]),
        FormsModule,
        IonicModule,
        HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/invite-player' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined invitationService: InvitationService variable', () => {
    expect(component.invitationService).toBeDefined();
  });

  it('should have a defined route: ActivatedRoute variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a defined toastCtrl: ToastController variable', () => {
    expect(component.toastCtrl).toBeDefined();
  });

  it('should have a defined navCtrl: NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined loadingCtrl: LoadingController variable', () => {
    expect(component.loadingCtrl).toBeDefined();
  });

  it('should have a null teamID variable set after initialization and then value 5 assigned', () => {
    expect(component.teamID).toEqual(null);
    component.route.snapshot.params.id = 5;
    component.ngOnInit();
    expect(component.teamID).toEqual(5);
  });

  it('should have a defined sendInvitation() method', () => {
    return new Promise(function(resolve, reject) {
    
      const cmpntySpy = spyOn(component, 'sendInvitation').and.returnValue(Promise.resolve(true));
      expect(component.sendInvitation()).toBeDefined();
      expect(cmpntySpy).toHaveBeenCalled();
      resolve();
    });
  });
});
