import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(public http: HttpClient) { }

  // The sender should always be soccermanagementteamapp@gmail.com
  sendEmail(recipient: string, team_id: string) {
    return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/invite', {
      sender: 'soccermanagementteamapp@gmail.com',
      recipient: recipient,
      team_id: team_id
    });
  }
}
