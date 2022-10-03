import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthCardComponent } from './birth-card.component';

describe('BirthCardComponent', () => {
  let component: BirthCardComponent;
  let fixture: ComponentFixture<BirthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
