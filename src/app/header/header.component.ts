import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public locationPathname: string;
  public selectedLang = 'en';
  public langList = ['ru', 'en'];

  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.locationPathname = event.url;
      }
    });
  }

  onChange($event) {
    console.log(this.selectedLang);
  }

  public logOut() {
    localStorage.setItem('credentials', JSON.stringify({
      email: 'victor@test.com',
      password: ''
    }));

    this.router.navigate(['/login']);
  }

}
