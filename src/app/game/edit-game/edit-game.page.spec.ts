import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamePage } from './edit-game.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

describe('EditGamePage', () => {
  let component: EditGamePage;
  let fixture: ComponentFixture<EditGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/edit-game' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined gameService:gameService variable', () => {
    expect(component.gameService).toBeDefined();
  });

  it('should have a defined navCtrl:NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined route variable', () => {
    expect(component.route).toBeDefined();
  });

  it('gameID is null prior to initialization', () =>{
    expect(component.gameID).toBeNull();
  });

  it('items list is null prior to initialization', () => {
    expect(component.items).toBeNull;
  });

  it('gameID is defined after initialization', () => {
    expect(component.gameID).toBeDefined();
  });

  it('items is defined after initialization', () => {
    expect(component.items).toBeDefined();
  });

  it('should have a null gameID variable set after initialization and then value 1 assigned', () => {
    expect(component.gameID).toEqual(null);
    component.route.snapshot.params.id = 1;
    component.ngOnInit();
    expect(component.gameID).toEqual(1);
  });

  it('should have a list of players of length 5 after initialization', () => {
    expect(component.gameID).toEqual(null);
    component.route.snapshot.params.gameID = 1;
    component.ngOnInit();
    expect(component.items.length).toEqual(5);
  });

  // loadGame() tests in E2E

});
