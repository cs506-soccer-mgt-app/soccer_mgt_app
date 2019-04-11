import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamePage } from './add-game.page';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('AddGamePage', () => {
  let component: AddGamePage;
  let fixture: ComponentFixture<AddGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/add-game' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined navCtrl:NavController variable', () => {
    expect(component.navCtrl).toBeDefined();
  });

  it('should have a defined route variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a defined game variable', () => {
    expect(component.game).toBeDefined();
  });

  it('should have empty strings for team fields: date, opponent, location, score, and time',  () => {
    expect(component.game.date).toEqual('');
    expect(component.game.opponent).toEqual('');
    expect(component.game.score).toEqual('');
    expect(component.game.location).toEqual('');
    expect(component.game.time).toEqual('');
  });

  it('should have a gameService:GameService variable', () => {
    expect(component.gameService).toBeDefined();
  });

});
