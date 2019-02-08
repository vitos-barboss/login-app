import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FakeDataService} from '../../services/fake-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public selectedFile;

  constructor(public FakeData: FakeDataService, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params);
    this.selectedFile = this.FakeData.getData().filter(item => item.id === +this.activatedRoute.snapshot.params.id)[0];
    console.log('this.selectedFile', this.selectedFile);
  }

  ngOnInit() {
  }

}
