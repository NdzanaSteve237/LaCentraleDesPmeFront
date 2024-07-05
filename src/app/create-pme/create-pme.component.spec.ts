import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePmeComponent } from './create-pme.component';

describe('CreatePmeComponent', () => {
  let component: CreatePmeComponent;
  let fixture: ComponentFixture<CreatePmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
