import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDsGheComponent } from './edit-ds-ghe.component';

describe('EditDsGheComponent', () => {
  let component: EditDsGheComponent;
  let fixture: ComponentFixture<EditDsGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDsGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDsGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
