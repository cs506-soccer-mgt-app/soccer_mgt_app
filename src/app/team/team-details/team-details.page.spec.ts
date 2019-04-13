import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsPage } from './team-details.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('TeamDetailsPage', () => {
  let component: TeamDetailsPage;
  let fixture: ComponentFixture<TeamDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/team-details' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined teamService:TeamService variable', () => {
    expect(component.teamService).toBeDefined();
  });

  it('should have a defined route:ActivatedRoute variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a null teamID variable set after initialization', () => {
    expect(component.teamID).toEqual(null);
    component.route.snapshot.params.id = 5;
    component.ngOnInit();
    expect(component.teamID).toEqual(5);
  });

  it('should contain a getGamesForTeam() method with a team ID as a parameter', () => {
    const teamID = 1;
    const cmpntSpy = spyOn(component, 'getGamesForTeam').and.callThrough();
    expect(component.getGamesForTeam(teamID)).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalledWith(teamID);
  });

  it('should contain a getTeamDetail with a team ID as a parameter', () => {
    const teamID = 1;
    const cmpntSpy = spyOn(component, 'getTeamDetail').and.callThrough();
    expect(component.getTeamDetail(teamID)).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalledWith(teamID);
  });

  it('should contain an ionViewWillEnter method to run GET methods for team details and games if teamID exists', () => {
    const teamID = 1;
    const cmpntSpy = spyOn(component, 'ionViewWillEnter').and.callThrough();
    const tmDtlSpy = spyOn(component, 'getTeamDetail').and.callThrough();
    const gmSpy = spyOn(component, 'getGamesForTeam').and.callThrough();

    component.route.snapshot.params.id = teamID;
    component.ngOnInit();
    expect(component.teamID).toEqual(teamID);

    expect(component.ionViewWillEnter()).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalled();
    expect(tmDtlSpy).toHaveBeenCalledWith(teamID);
    expect(gmSpy).toHaveBeenCalledWith(teamID);
  });
});
