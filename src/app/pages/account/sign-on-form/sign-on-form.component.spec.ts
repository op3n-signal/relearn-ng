import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOnFormComponent } from './sign-on-form.component';

describe('SignOnFormComponent', () => {
  let component: SignOnFormComponent;
  let fixture: ComponentFixture<SignOnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
