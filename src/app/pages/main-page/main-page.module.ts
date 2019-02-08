import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { FileSizePipe } from '../../pipes/file-size.pipe';


@NgModule({
  declarations: [
    ListComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
