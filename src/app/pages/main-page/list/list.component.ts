import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../../../services/fake-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public data;

  constructor(public FakeData: FakeDataService, public router: Router) {
    this.data = this.FakeData.getData();
  }

  ngOnInit() {

  }

  public openItem(id) {
    this.router.navigate(['/details', id]);
  }

}
