import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor() { }

  public getData() {
    return [
      {
        id: 1,
        fileName: 'file_name_1.jpg',
        createdBy: 'Bob Robson',
        createdDate: '08/10/2016',
        size: 12000000
      },
      {
        id: 2,
        fileName: 'file_name_2.jpg',
        createdBy: 'Bob Robson',
        createdDate: '12/10/2001',
        size: 120000
      },
      {
        id: 3,
        fileName: 'file_name_3.jpg',
        createdBy: 'Bob Robson',
        createdDate: '23/10/2015',
        size: 22000
      },
      {
        id: 4,
        fileName: 'file_name_4.jpg',
        createdBy: 'Bob Robson',
        createdDate: '01/10/2011',
        size: 1200
      }
    ];
  }
}
