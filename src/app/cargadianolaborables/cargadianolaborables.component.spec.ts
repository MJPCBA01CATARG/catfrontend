import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadianolaborablesComponent } from './cargadianolaborables.component';

describe('CargadianolaborablesComponent', () => {
  let component: CargadianolaborablesComponent;
  let fixture: ComponentFixture<CargadianolaborablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargadianolaborablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargadianolaborablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
