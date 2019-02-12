import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVendedoresComponent } from './table-vendedores.component';

describe('TableVendedoresComponent', () => {
  let component: TableVendedoresComponent;
  let fixture: ComponentFixture<TableVendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
