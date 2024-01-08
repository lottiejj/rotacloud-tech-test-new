import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieRolesComponent } from './lottie-roles.component';

describe('LottieRolesComponent', () => {
  let component: LottieRolesComponent;
  let fixture: ComponentFixture<LottieRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LottieRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
