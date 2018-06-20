import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptiListComponent } from './recepti-list.component';

describe('ReceptiListComponent', () => {
  let component: ReceptiListComponent;
  let fixture: ComponentFixture<ReceptiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
