import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalugarComponent } from './listalugar.component';

describe('ListalugarComponent', () => {
  let component: ListalugarComponent;
  let fixture: ComponentFixture<ListalugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
