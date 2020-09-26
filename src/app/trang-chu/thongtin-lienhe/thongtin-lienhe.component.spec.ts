import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinLienheComponent } from './thongtin-lienhe.component';

describe('ThongtinLienheComponent', () => {
  let component: ThongtinLienheComponent;
  let fixture: ComponentFixture<ThongtinLienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinLienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinLienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
