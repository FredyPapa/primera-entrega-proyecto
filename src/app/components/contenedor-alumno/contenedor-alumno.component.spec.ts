import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAlumnoComponent } from './contenedor-alumno.component';

describe('ContenedorAlumnoComponent', () => {
  let component: ContenedorAlumnoComponent;
  let fixture: ComponentFixture<ContenedorAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
