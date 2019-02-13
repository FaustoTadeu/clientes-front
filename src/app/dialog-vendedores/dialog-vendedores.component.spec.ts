import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVendedoresComponent } from './dialog-vendedores.component';

describe('DialogVendedoresComponent', () => {
  let component: DialogVendedoresComponent;
  let fixture: ComponentFixture<DialogVendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
