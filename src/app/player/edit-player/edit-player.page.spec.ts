import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayerPage } from './edit-player.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('EditPlayerPage', () => {
  let component: EditPlayerPage;
  let fixture: ComponentFixture<EditPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/edit-player' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined playerService: PlayerService', () => {
    expect(component.playerService).toBeDefined();
  });

  it('should have a defined route: ActivatedRoute', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a defined navCtrl: NavController', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined loadingCtrl: LoadingController', () => {
    expect(component.loadingCtrl).toBeDefined();
  });

  it('should have a defined toastCtrl: ToastController', () => {
    expect(component.toastCtrl).toBeDefined();
  });

  it('should have a defined ngOnInit() method that initalizes player', () => {
    const player_id = 1;
    component.route.snapshot.params.id = player_id;
    component.ngOnInit();
    expect(component.playerID).toEqual(player_id);
  });

  it('should have a defined ionViewWillEnter() method that populates player', () => {
    const player_id = 1;

    const cmpntSpy = spyOn(component, 'ionViewWillEnter').and.callThrough();
    component.route.snapshot.params.id = player_id;
    component.ngOnInit();
    expect(component.playerID).toEqual(player_id);

    expect(component.ionViewWillEnter()).toEqual(undefined);
    expect(cmpntSpy).toHaveBeenCalled();
  });

  it('should have a defined save() method', () => {
    return new Promise(function(resolve, reject) {
      
      const cmpntySpy = spyOn(component, 'save').and.returnValue(Promise.resolve(true));
      expect(component.save()).toBeDefined();
      expect(cmpntySpy).toHaveBeenCalled();
      resolve();
    });
  });
  
});
