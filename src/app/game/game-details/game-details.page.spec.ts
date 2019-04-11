import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsPage } from './game-details.page';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

describe('GameDetailsPage', () => {
  let component: GameDetailsPage;
  let fixture: ComponentFixture<GameDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/game-details' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should have a defined gameService:gameService variable', () => {
    expect(component.gameService).toBeDefined();
  });

  it('should have a defined route:ActivatedRoute variable', () => {
    expect(component.route).toBeDefined();
  });

  it('should have a null gameID variable set after initialization', () => {
    expect(component.gameID).toEqual(null);
    component.route.snapshot.params.id = 5;
    component.ngOnInit();
    expect(component.gameID).toEqual(5);
  });
});
