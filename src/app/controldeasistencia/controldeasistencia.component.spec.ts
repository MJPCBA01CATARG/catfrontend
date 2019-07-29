import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControldeasistenciaComponent } from './controldeasistencia.component';

describe('ControldeasistenciaComponent', () => {
  let component: ControldeasistenciaComponent;
  let fixture: ComponentFixture<ControldeasistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControldeasistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControldeasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
