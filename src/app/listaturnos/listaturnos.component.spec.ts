import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaturnosComponent } from './listaturnos.component';

describe('ListaturnosComponent', () => {
  let component: ListaturnosComponent;
  let fixture: ComponentFixture<ListaturnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaturnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaturnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
