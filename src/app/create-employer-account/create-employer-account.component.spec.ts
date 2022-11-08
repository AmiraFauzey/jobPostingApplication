import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployerAccountComponent } from './create-employer-account.component';

describe('CreateEmployerAccountComponent', () => {
  let component: CreateEmployerAccountComponent;
  let fixture: ComponentFixture<CreateEmployerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployerAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
