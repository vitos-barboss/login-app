import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../services/fake-data.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public data;
  public locationPathname: string;

  constructor(public FakeData: FakeDataService, public router: Router) {
    this.data = this.FakeData.getData();
    console.log('route', this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.locationPathname = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
