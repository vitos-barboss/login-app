import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  signupForm: FormGroup;
  credentials: {
    email: string,
    password: string
  };
  hasPermission = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
        'password': new FormControl(null, [Validators.required], this.forbiddenEmails),
      }),
    });
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.setValue({
      'userData': {
        'email': 'victor@test.com',
        'password': ''
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm.value.userData);
    this.credentials = {
      email: this.signupForm.value.userData.email,
      password: this.signupForm.value.userData.password
    };

    const credValid = JSON.parse(localStorage.getItem('credentialsValid'));

    if (credValid.email === this.credentials.email && credValid.password === this.credentials.password) {
      this.router.navigate(['main']);
      console.log('Valid credentials');
      localStorage.setItem('credentials', JSON.stringify({
        email: 'victor@test.com',
        password: '111'
      }));

      this.hasPermission = true;

    } else {
      this.hasPermission = false;
      this.signupForm.setValue({
        'userData': {
          'email': 'victor@test.com',
          'password': ''
        },
      });
      console.log('Not valid credentials');
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 500);
    });
    return promise;
  }

}
