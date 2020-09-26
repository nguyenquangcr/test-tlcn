import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tintuc',
  templateUrl: './item-tintuc.component.html',
  styleUrls: ['./item-tintuc.component.scss']
})
export class ItemTintucComponent implements OnInit {

  @Input() Tin;
  constructor() { }

  ngOnInit(): void {
  }

}
