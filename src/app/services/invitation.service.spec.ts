import { TestBed } from '@angular/core/testing';

import { InvitationService } from './invitation.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('InvitationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [InvitationService]
  }));

  function setup() {
    const invitationService = TestBed.get(InvitationService);
    const httpTestingCtrl = TestBed.get(HttpTestingController);
    return { invitationService, httpTestingCtrl };
  }

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });

  it('should be created', () => {
    const service: InvitationService = TestBed.get(InvitationService);
    expect(service).toBeTruthy();
  });

  it('should POST a new invitation to the resource', () => {
    const { invitationService, httpTestingCtrl } = setup();
    const mockData = { sender: 'soccermanagementteamapp@gmail.com', recipient: 'mymail@mail.com', team_id: 1 };
    invitationService.sendEmail(mockData.recipient, mockData.team_id)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/invite');
    expect(req.request.method).toBe('POST');
    req.flush({
      data: mockData
    });
  });
});
