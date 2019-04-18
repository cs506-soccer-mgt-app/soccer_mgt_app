import { TestBed } from '@angular/core/testing';

import { CognitoService } from './cognito-service.service';

describe('cognitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CognitoService]
  }));

  function setup() {
    const cognitoService = TestBed.get(CognitoService);
    return { cognitoService };
  }

  afterEach(() => {
    const { cognitoService } = setup();
    cognitoService.setUser(undefined);
  });

  it('should be created', () => {
    const service: CognitoService = TestBed.get(CognitoService);
    expect(service).toBeTruthy();
  });

  it('should have an undefined user variable', () => {
    const { cognitoService } = setup();
    expect(cognitoService.user).toEqual(undefined);
  });

  it('should get the user variable', () => {
    const { cognitoService } = setup();
    const actUser = cognitoService.getUser();
    expect(actUser).toEqual(undefined);
  });

  it('should set the user variable to the passed in parameter', () => {
    const { cognitoService } = setup();
    const expUser = { email: 'name@mail.com', firstname: 'First', lastname: 'Last', phonenumber: '+12223334444', sex: 'Male'};
    let actUser = cognitoService.getUser();
    expect(actUser).toEqual(undefined);
    cognitoService.setUser(expUser);
    actUser = cognitoService.getUser();
    expect(actUser).toEqual(expUser);
  });

  it('should logout the user if user is not null', () => {
    const { cognitoService } = setup();
    const expUser = { email: 'name@mail.com', firstname: 'First', lastname: 'Last', phonenumber: '+12223334444', sex: 'Male'};
    let actUser;
    cognitoService.setUser(expUser);
    actUser = cognitoService.getUser();
    expect(actUser).toEqual(expUser);
    cognitoService.logout();
    actUser = cognitoService.getUser();
    expect(actUser).toEqual(null);
  });

  it('should not do anything if the user is null', () => {
    const { cognitoService } = setup();
    const expUser = null;
    cognitoService.setUser(expUser);
    let actUser = cognitoService.getUser();
    expect(actUser).toEqual(expUser);
    cognitoService.logout();
    actUser = cognitoService.getUser();
    expect(actUser).toEqual(expUser);
  });
});
