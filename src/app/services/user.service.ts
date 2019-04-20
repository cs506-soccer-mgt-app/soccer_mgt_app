import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getTeamsForUser(id: string) {
    return this.http.get(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/${id}/teams`);
  }

  getGamesForUser(id: string) {
    return this.http.get(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/${id}/games`);
  }

}
