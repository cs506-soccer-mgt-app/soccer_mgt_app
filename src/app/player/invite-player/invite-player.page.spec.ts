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
    console.log(component);
    expect(component).toBeTruthy();
  });
});
