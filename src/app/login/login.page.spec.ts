import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), FormsModule, IonicModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/login' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
