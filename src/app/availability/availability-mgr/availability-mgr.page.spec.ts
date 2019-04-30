import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityMgrPage } from './availability-mgr.page';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

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

  
});
