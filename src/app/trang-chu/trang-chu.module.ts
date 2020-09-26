import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { FormLienheComponent } from './form-lienhe/form-lienhe.component';
import { ThongtinLienheComponent } from './thongtin-lienhe/thongtin-lienhe.component';
import { FooterComponent } from './footer/footer.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ItemTintucComponent } from './item-tintuc/item-tintuc.component';



@NgModule({
  declarations: [HeaderComponent, SliderComponent, LoaiPhimComponent, PhimDangChieuComponent,
    PhimSapChieuComponent, ItemPhimComponent, TinTucComponent, DienAnhComponent,
    ReviewComponent, KhuyenMaiComponent, LienHeComponent,
    FormLienheComponent, ThongtinLienheComponent, FooterComponent, TrangChuComponent, ItemTintucComponent],
  imports: [
    CommonModule,
    
  ], exports: [
    HeaderComponent,
    SliderComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent, TinTucComponent,
    DienAnhComponent, ReviewComponent, KhuyenMaiComponent,
    LienHeComponent, FormLienheComponent, ThongtinLienheComponent, FooterComponent,
    TrangChuComponent, ItemTintucComponent
  ]
})
export class TrangChuModule { }
