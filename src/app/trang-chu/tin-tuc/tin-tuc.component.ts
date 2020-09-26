import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {
  LoaiTinTuc:string = "dienanh"
  constructor() { }

   Chonloaitintuc(val){
     this.LoaiTinTuc=val;
   } 
  ngOnInit(): void {
  }

}
