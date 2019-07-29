import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafuncionesComponent } from './listafunciones.component';

describe('ListafuncionesComponent', () => {
  let component: ListafuncionesComponent;
  let fixture: ComponentFixture<ListafuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListafuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListafuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
