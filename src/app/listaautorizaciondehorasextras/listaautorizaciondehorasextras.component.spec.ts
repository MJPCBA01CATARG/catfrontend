import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaautorizaciondehorasextrasComponent } from './listaautorizaciondehorasextras.component';

describe('ListaautorizaciondehorasextrasComponent', () => {
  let component: ListaautorizaciondehorasextrasComponent;
  let fixture: ComponentFixture<ListaautorizaciondehorasextrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaautorizaciondehorasextrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaautorizaciondehorasextrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
