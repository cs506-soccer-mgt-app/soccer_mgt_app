import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameListPage } from './user-game-list.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserGameListPage', () => {
  let component: UserGameListPage;
  let fixture: ComponentFixture<UserGameListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGameListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGameListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined userService: UserService variable', () => {
    expect(component.userService).toBeDefined();
  });

  it('should have a defined cognitoService: CognitoService variable', () => {
    expect(component.cognitoService).toBeDefined();
  });

  it('should have a defined toastCtrl: ToastController variable', () => {
    expect(component.toastCtrl).toBeDefined();
  });

  it('should have a defined availabilityService: AvailabilityService variable', () => {
    expect(component.availabilityService).toBeDefined();
  });

  it('should have a defined compareByDate() method that returns 0 when date A is equal to date B', () => {
    const cmpntSpy = spyOn(component, 'compareByDate').and.callThrough();
    const dateA = {date: '5'};
    const dateB = {date: '5'};

    expect(component.compareByDate(dateA, dateB)).toEqual(0);
    expect(cmpntSpy).toHaveBeenCalled();
  });

  it('should have a defined compareByDate() method that returns 1 when date A is greater than to date B', () => {
    const cmpntSpy = spyOn(component, 'compareByDate').and.callThrough();
    const dateA = {date: '5'};
    const dateB = {date: '4'};

    expect(component.compareByDate(dateA, dateB)).toEqual(1);
    expect(cmpntSpy).toHaveBeenCalled();
  });

  it('should have a defined compareByDate() method that returns -1 when date A is less than to date B', () => {
    const cmpntSpy = spyOn(component, 'compareByDate').and.callThrough();
    const dateA = {date: '3'};
    const dateB = {date: '4'};

    expect(component.compareByDate(dateA, dateB)).toEqual(-1);
    expect(cmpntSpy).toHaveBeenCalled();
  });
});
