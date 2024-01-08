import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieUsersComponent } from './lottie-users.component';

describe('LottieUsersComponent', () => {
  let component: LottieUsersComponent;
  let fixture: ComponentFixture<LottieUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LottieUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
