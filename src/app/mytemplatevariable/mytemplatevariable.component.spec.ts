import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytemplatevariableComponent } from './mytemplatevariable.component';

describe('MytemplatevariableComponent', () => {
  let component: MytemplatevariableComponent;
  let fixture: ComponentFixture<MytemplatevariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytemplatevariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytemplatevariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
