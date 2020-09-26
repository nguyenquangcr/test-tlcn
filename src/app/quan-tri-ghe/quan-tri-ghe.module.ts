import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhsachGheComponent } from './danhsach-ghe/danhsach-ghe.component';
import { EditDsGheComponent } from './edit-ds-ghe/edit-ds-ghe.component';



@NgModule({
  declarations: [GheComponent, DanhsachGheComponent, EditDsGheComponent],
  imports: [
    CommonModule
  ],exports:[
    GheComponent, DanhsachGheComponent, EditDsGheComponent
  ]
})
export class QuanTriGheModule { }
