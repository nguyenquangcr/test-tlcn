import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsach-ghe',
  templateUrl: './danhsach-ghe.component.html',
  styleUrls: ['./danhsach-ghe.component.scss']
})
export class DanhsachGheComponent implements OnInit {

  Danhsachghe = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false }, {
      SoGhe: 4, TenGhe:
        "số 4", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 5, TenGhe: "số 5", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 6, TenGhe: "số 6",
      Gia: 100, TrangThai: false
    }, {
      SoGhe: 7, TenGhe: "số7", Gia: 100, TrangThai: false
    }, {
      SoGhe: 8, TenGhe:
        "số 7", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 9, TenGhe: "số 9", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 10, TenGhe: "số 10",
      Gia: 100, TrangThai: false
    }, {
      SoGhe: 11, TenGhe: "số11", Gia: 100, TrangThai: false
    }, {
      SoGhe: 12, TenGhe:
        "số 12", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 13, TenGhe: "số 13", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 14, TenGhe: "số 14",
      Gia: 100, TrangThai: false
    }, {
      SoGhe: 15, TenGhe: "số15", Gia: 100, TrangThai: false
    }, {
      SoGhe: 16, TenGhe:
        "số 16", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 17, TenGhe: "số 17", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 18, TenGhe: "số 18",
      Gia: 100, TrangThai: false
    }, {
      SoGhe: 19, TenGhe: "số19", Gia: 100, TrangThai: false
    }, {
      SoGhe: 20, TenGhe:
        "số 20", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 21, TenGhe: "số 21", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 22, TenGhe: "số 22",
      Gia: 100, TrangThai: false
    }, {
      SoGhe: 23, TenGhe: "số23", Gia: 100, TrangThai: false
    }, {
      SoGhe: 24, TenGhe:
        "số 24", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 25, TenGhe: "số 25", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 26, TenGhe: "số 26",
      Gia: 100, TrangThai: false
    }, {
      SoGhe: 27, TenGhe: "số27", Gia: 100, TrangThai: false
    }, {
      SoGhe: 28, TenGhe:
        "số 28", Gia: 100, TrangThai: false
    },
    {
      SoGhe: 29, TenGhe: "số 29", Gia: 100,
      TrangThai: false
    }, {
      SoGhe: 30, TenGhe: "số 30",
      Gia: 100, TrangThai: true
    }, {
      SoGhe: 31, TenGhe: "số31", Gia: 100, TrangThai: false
    }
  ]

  soghedadat: number = 0;
  sogheconlai: number;

  DanhSachGheDangDat: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.sogheconlai = this.Danhsachghe.length;
  }

  DatGheParent(status, ghe) {
    if (status) {
      this.soghedadat++;
      this.sogheconlai--;
      this.DanhSachGheDangDat.push(ghe)
    } else {
      this.soghedadat--;
      this.sogheconlai++;
      for (let index in this.DanhSachGheDangDat) {
        if (this.DanhSachGheDangDat[index].SoGhe === ghe.SoGhe) {
          this.DanhSachGheDangDat.splice(parseInt(index),1);
        }
      }
    }
  }

}
