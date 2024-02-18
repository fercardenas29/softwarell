import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHospedajeComponent } from './crear-hospedaje.component';

describe('CrearHospedajeComponent', () => {
  let component: CrearHospedajeComponent;
  let fixture: ComponentFixture<CrearHospedajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearHospedajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
