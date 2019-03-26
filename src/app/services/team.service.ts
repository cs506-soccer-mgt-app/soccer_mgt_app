import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(public http: HttpClient) { }

   getTeamDetail(id: number) {
      return this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/' + id);
   }

   createTeam(name: string, primary_color: string, session_id: number, alternate_color: string, manager_id: number) {
      return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams', {
          name: name,
          primary_color: primary_color,
          session_id: session_id,
          alternate_color: alternate_color,
          manager_id: manager_id
      });
   }

   updateTeam(id: number, name: string, primary_color: string, session_id: number, alternate_color: string, manager_id: number) {
      return this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/' + id, {
          name: name,
          primary_color: primary_color,
          session_id: session_id,
          alternate_color: alternate_color,
          manager_id: manager_id
      });
   }
}
