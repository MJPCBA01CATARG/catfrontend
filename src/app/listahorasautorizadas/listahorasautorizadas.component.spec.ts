import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListahorasautorizadasComponent } from './listahorasautorizadas.component';

describe('ListahorasautorizadasComponent', () => {
  let component: ListahorasautorizadasComponent;
  let fixture: ComponentFixture<ListahorasautorizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListahorasautorizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListahorasautorizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
