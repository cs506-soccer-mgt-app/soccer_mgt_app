import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined userService: UserService variable', () => {
    expect(component.userService).toBeDefined();
  });

  it('should hav a defined cognitoService: CognitoService variable', () => {
    expect(component.cognitoService).toBeDefined();
  });

  it('should contain an ionViewWillEnter() method', () => {
    return new Promise(function(resolve, reject) {
      
      const cmpntySpy = spyOn(component, 'ionViewWillEnter').and.returnValue(Promise.resolve(true));
      component.ionViewWillEnter();
      expect(cmpntySpy).toHaveBeenCalled();
      expect(component.teamList).toEqual(undefined);
      resolve();
    });
  });
});
