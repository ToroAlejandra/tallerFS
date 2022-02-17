import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoinsCountryComponent } from './list-coins-country.component';

describe('ListCoinsCountryComponent', () => {
  let component: ListCoinsCountryComponent;
  let fixture: ComponentFixture<ListCoinsCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoinsCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoinsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
