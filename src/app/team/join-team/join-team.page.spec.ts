import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTeamPage } from './join-team.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

describe('JoinTeamPage', () => {
  let component: JoinTeamPage;
  let fixture: ComponentFixture<JoinTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
          RouterModule.forRoot([]),
        FormsModule,
        IonicModule,
        HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/join-team' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
