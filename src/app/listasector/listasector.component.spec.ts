import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasectorComponent } from './listasector.component';

describe('ListasectorComponent', () => {
  let component: ListasectorComponent;
  let fixture: ComponentFixture<ListasectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
