import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private server = 'https://smart-hospital.herokuapp.com';

  constructor(private http: HttpClient) { }

  logIn(username: string, password: string) {
    console.log(username + ' ' + password);
    const header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    return this.http.post(
      this.server + '/oauth/token',
      {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'kj2aIHNGt8JXJJoTxxVu2KA84gGRqirouCi5tht2',
        username,
        password
      },
    );
  }

  logOut(): any {
    localStorage.setItem('token', '');
  }

  register(username, password, email, firstName, lastName) {
    console.log(username + ' ' + password);
    const header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    return this.http.post(
      this.server + '/register',
      {
        firstName,
        lastName,
        email,
        username,
        password
      },
    );
  }

  getData() {
    const header = new HttpHeaders({'Content-type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.server + '/api/hospital', { headers: header });
  }

  saveToken (token) {
    localStorage.setItem('token', token);
  }

}
