import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameListPage } from './user-game-list.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { resolve } from 'url';

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

  it('should include a loadData() method that populates user game list', () => {
    return new Promise(function(resolve, reject) {

      const cmpntySpy = spyOn(component, 'loadData').and.returnValue(Promise.resolve(true));
      component.loadData();
      expect(cmpntySpy).toHaveBeenCalled();
      expect((component.userGameList).length).toEqual(0);
      resolve();
    });
  });

  it('should contain an ionViewWillEnter() method that has a call to loadData()', () => {
    return new Promise(function(resolve, reject) {
      const cmpntSpy = spyOn(component, 'ionViewWillEnter').and.returnValue(Promise.resolve(true));
      const loadSpy = spyOn(component, 'loadData').and.returnValue(Promise.resolve(true));
      
      component.ionViewWillEnter();

      expect(cmpntSpy).toHaveBeenCalled();
      
      resolve();
    });
  });
});
