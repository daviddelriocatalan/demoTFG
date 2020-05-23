import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosserviciosComponent } from './nuestrosservicios.component';

describe('NuestrosserviciosComponent', () => {
  let component: NuestrosserviciosComponent;
  let fixture: ComponentFixture<NuestrosserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
