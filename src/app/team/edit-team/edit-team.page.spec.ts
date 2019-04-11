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

  it('should have a null teamID variable set after initialization', () => {
    expect(component.teamID).toEqual(null);
    component.route.snapshot.params.id = 5;
    component.ngOnInit();
    expect(component.teamID).toEqual(5);
  });

});
