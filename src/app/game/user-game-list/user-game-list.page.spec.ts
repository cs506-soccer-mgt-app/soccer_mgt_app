import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameListPage } from './user-game-list.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserGameListPage', () => {
  let component: UserGameListPage;
  let fixture: ComponentFixture<UserGameListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGameListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGameListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
