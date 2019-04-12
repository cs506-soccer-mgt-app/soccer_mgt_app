import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamPage } from './create-team.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { TeamDetailsPage } from '../team-details/team-details.page';

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

  it('createTeam() is defined and assigns values to games', () => {
    component.route.snapshot.params.name = "Bulls";
    component.route.snapshot.params.primary_color = "Red";
    component.route.snapshot.params.alternate_color = "Blue";
    component.route.snapshot.params.session_id = "3";
    component.route.snapshot.params.manager_id = "2";
    component.ngOnInit();
    component.createTeam();
    expect(component.team.name = "Bulls");
    expect(component.team.primary_color = "Red");
    expect(component.team.alternate_color = "Blue");
    expect(component.team.session_id = "3");
    expect(component.team.manager_id= "2");
  });

});
