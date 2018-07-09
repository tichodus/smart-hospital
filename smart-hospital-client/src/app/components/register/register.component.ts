import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  register (firstName, lastName, email, username, password) {
    console.log(JSON.stringify({
      firstName,
      lastName,
      email,
      username,
      password
    }));
    this.api.register(firstName, lastName, email, username, password).subscribe(data => {
      console.log(data);
      if (data) {
        this.router.navigateByUrl('/');
      }
    });
  }

  ngOnInit() {
  }

}
