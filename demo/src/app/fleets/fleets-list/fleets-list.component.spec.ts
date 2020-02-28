import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetsListComponent } from './fleets-list.component';

describe('FleetsListComponent', () => {
  let component: FleetsListComponent;
  let fixture: ComponentFixture<FleetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
