import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTabsComponent } from './atm-tabs.component';

describe('AtmTabsComponent', () => {
  let component: AtmTabsComponent;
  let fixture: ComponentFixture<AtmTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
