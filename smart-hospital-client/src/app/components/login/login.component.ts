import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(username: string, password: string) {
    this.api.logIn(username, password).subscribe(data => {
      this.api.saveToken(data['access_token']);
      this.router.navigateByUrl('/dashboard?mode="logged"');
    });
  }

}
