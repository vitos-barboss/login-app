import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('credentialsValid', JSON.stringify({
      email: 'victor@test.com',
      password: '111'
    }));
  }

}
