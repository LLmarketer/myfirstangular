import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytwowaybindingComponent } from './mytwowaybinding.component';

describe('MytwowaybindingComponent', () => {
  let component: MytwowaybindingComponent;
  let fixture: ComponentFixture<MytwowaybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytwowaybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
