import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptOverviewComponent } from './recept-overview.component';

describe('ReceptOverviewComponent', () => {
  let component: ReceptOverviewComponent;
  let fixture: ComponentFixture<ReceptOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
