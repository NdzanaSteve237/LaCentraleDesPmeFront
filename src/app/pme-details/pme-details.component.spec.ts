import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmeDetailsComponent } from './pme-details.component';

describe('PmeDetailsComponent', () => {
  let component: PmeDetailsComponent;
  let fixture: ComponentFixture<PmeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
