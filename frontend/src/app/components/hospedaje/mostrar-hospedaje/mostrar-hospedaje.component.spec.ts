import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarHospedajeComponent } from './mostrar-hospedaje.component';

describe('MostrarHospedajeComponent', () => {
  let component: MostrarHospedajeComponent;
  let fixture: ComponentFixture<MostrarHospedajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarHospedajeComponent]
    });
    fixture = TestBed.createComponent(MostrarHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
