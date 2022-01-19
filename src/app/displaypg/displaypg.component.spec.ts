import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypgComponent } from './displaypg.component';

describe('DisplaypgComponent', () => {
  let component: DisplaypgComponent;
  let fixture: ComponentFixture<DisplaypgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
