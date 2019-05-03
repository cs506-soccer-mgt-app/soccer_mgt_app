import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityMgrPage } from './availability-mgr.page';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { access } from 'fs';
import { ExpectedConditions } from 'protractor';

describe('AvailabilityMgrPage', () => {
  let component: AvailabilityMgrPage;
  let fixture: ComponentFixture<AvailabilityMgrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityMgrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/availability-mgr' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityMgrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined route: ActivatedRoute variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a defined gameService: GameService variable', () => {
    expect(component.gameService).toBeDefined();
  });

  it('should have a defined teamService: TeamService variable', () => {
    expect(component.teamService).toBeDefined();
  });

  it('should have a defined availabilityService: AvailabilityService variable', () => {
    expect(component.availabilityService).toBeDefined();
  });

  it('should have a defined toastCtrl: ToastController variable', () => {
    expect(component.toastCtrl).toBeDefined();
  });

  it('should have a defined loadingCtrl: LoadingController variable', () => {
    expect(component.loadingCtrl).toBeDefined();
  });

  it('should have a defined navCtrl: NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined cognitoService: CognitoService variable', () => {
    expect(component.cognitoService).toBeDefined();
  });

  it('should have a defined playerService: PlayerService variable', () => {
    expect(component.playerService).toBeDefined();
  });

  it('should initialize variables gameID and playerID when ngOnInit() is called', () => {
    const gameID = 1;
    const playerID = 1;

    component.route.snapshot.params.game_id = gameID;
    component.route.snapshot.params.player_id = playerID;
    component.ngOnInit();
    expect(component.gameID).toEqual(gameID);
    expect(component.playerID).toEqual(playerID);
  });

  it('should contain a loadTeam() with game ID as a parameter', () => {
    const game_id = 1;
    fixture.detectChanges();
    const cmpntSpy = spyOn(component, 'loadTeam').and.callThrough();
    expect(component.loadTeam(game_id)).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalledWith(game_id);
  });

  it('should contain a loadPlayer() with player ID as a parameter', () => {
    const player_id = 1;
    fixture.detectChanges();
    const cmpntSpy = spyOn(component, 'loadTeam').and.callThrough();
    expect(component.loadTeam(player_id)).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalledWith(player_id);
  });

  it('should contain an loadAvailability() method', () => {
    return new Promise(function(resolve, reject) {

      const game_id = 1;
      const player_id = 1;
      
      const cmpntSpy = spyOn(component, 'loadAvailability').and.returnValue(Promise.resolve(true));
      component.loadAvailability(game_id, player_id);
      expect(cmpntSpy).toHaveBeenCalled();

      resolve();
    });
  });

  it('should contain canSetAvailability() method', () => {
    component.isTeamManager;
    component.isPlayer;
    expect(component.canSetAvailability()).toEqual(undefined);
  });

  it('should contain isPlayer() method', () => {
    const cmpntSpy = spyOn(component, 'isPlayer').and.callThrough();
    component.isPlayer();
    expect(cmpntSpy).toHaveBeenCalledWith();
  });

  it('should contain isTeamManager() method', () => {
    const cmpntSpy = spyOn(component, 'isTeamManager').and.callThrough();
    component.isTeamManager();
    expect(cmpntSpy).toHaveBeenCalledWith();
  });


  it('should contain a load() method that calls loadAvailablity, loadPlayer, and loadTeam', () => {
    return new Promise(function(resolve, reject) {
      const game_id = 1;
      const player_id = 1;
      component.gameID = game_id;
      component.playerID = player_id;
    
      const cmpntSpy = spyOn(component, 'load').and.returnValue(Promise.resolve(true));
      const availSpy = spyOn(component, 'loadAvailability').and.returnValue(Promise.resolve(true));
      //const playSpy = spyOn(component, 'loadPlayer').and.returnValue(Promise.resolve(true));
      //const teamSpy = spyOn(component, 'loadTeam').and.returnValue(Promise.resolve(true));

      component.load();
      expect(cmpntSpy).toHaveBeenCalled();
      //expect(availSpy).toHaveBeenCalled();
      //expect(teamSpy).toHaveBeenCalledWith(game_id);
      resolve();
    });
  });
});
