import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamPage } from './edit-team.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('EditTeamPage', () => {
  let component: EditTeamPage;
  let fixture: ComponentFixture<EditTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/edit-team' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined teamService:TeamService variable', () => {
    expect(component.teamService).toBeDefined();
  });

  it('should have a defined navCtrl:NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined route variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a null teamID variable set before initialization and then equal to teamID after assignment', () => {
    expect(component.teamID).toEqual(null);
    component.route.snapshot.params.id = 5;
    component.ngOnInit();
    expect(component.teamID).toEqual(5);
  });

  
  it('should have a updateTeam() method', () => {
    return new Promise(function(resolve, reject) {

      const cmpntSpy = spyOn(component, 'updateTeam').and.returnValue(Promise.resolve(true));
      component.updateTeam();
      expect(cmpntSpy).toHaveBeenCalled();
      expect(component.team).toEqual(undefined);

      resolve();
    });
  });

  it('should have a defined getTeamDetail() method that takes id as parameter', () => {
    const this_id = 1;
    const cmpntSpy = spyOn(component, 'getTeamDetail').and.callThrough();
    component.getTeamDetail(this_id);
    expect(cmpntSpy).toHaveBeenCalledWith(1);
    expect(component.team).toEqual(undefined);
  });

});
