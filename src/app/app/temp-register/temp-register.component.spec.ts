import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRegisterComponent } from './temp-register.component';

describe('TempRegisterComponent', () => {
  let component: TempRegisterComponent;
  let fixture: ComponentFixture<TempRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
