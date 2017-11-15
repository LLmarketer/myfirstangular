import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventbindingComponent } from './myeventbinding.component';

describe('MyeventbindingComponent', () => {
  let component: MyeventbindingComponent;
  let fixture: ComponentFixture<MyeventbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyeventbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
