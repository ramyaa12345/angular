import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrqueryComponent } from './hrquery.component';

describe('HrqueryComponent', () => {
  let component: HrqueryComponent;
  let fixture: ComponentFixture<HrqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
