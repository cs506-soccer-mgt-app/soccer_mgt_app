import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamPage } from './create-team.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { componentHostSyntheticProperty } from '@angular/core/src/render3';

describe('CreateTeamPage', () => {
  let component: CreateTeamPage;
  let fixture: ComponentFixture<CreateTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/create-team' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined navCtrl:NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined route:ActivatedRoute variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a defined team variable', () => {
    expect(component.team).toBeDefined();
  });

  it('should have empty strings for team fields: name, session_id, manager_id, primary_color, alternate_color', () => {
    expect(component.team.name).toEqual('');
    expect(component.team.primary_color).toEqual('');
    expect(component.team.alternate_color).toEqual('');
    expect(component.team.manager_id).toEqual(null);
    expect(component.team.session_id).toEqual(null);
  });

  it('should have a teamService:TeamService variable', () => {
    expect(component.teamService).toBeDefined();
  });

  it('should have a createTeam() method', () => {
    return new Promise(function(resolve, reject) {
      component.team.name = "";
      component.team.primary_color = "";
      component.team.alternate_color = "";
      component.team.session_id = null;

      const cmpntSpy = spyOn(component, 'createTeam').and.returnValue(Promise.resolve(true));
      component.createTeam();
      expect(cmpntSpy).toHaveBeenCalled();
      expect(component.team).toBeDefined();

      resolve();
    });
  });

  it('should have a defined ionViewWillEnter() method', () => {
    component.team = null;
    const cmpntSpy = spyOn(component, 'ionViewWillEnter').and.callThrough();
    component.ionViewWillEnter();
    expect(component.team.name).toEqual('');
    expect(component.team.primary_color).toEqual('');
    expect(component.team.alternate_color).toEqual('');
    expect(component.team.manager_id).toEqual(null);
    expect(component.team.session_id).toEqual(null);
    expect(component.team).toBeDefined();
    expect(cmpntSpy).toHaveBeenCalled();
  });
});
