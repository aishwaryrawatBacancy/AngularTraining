import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIndividualComponent } from './post-individual.component';

describe('PostIndividualComponent', () => {
  let component: PostIndividualComponent;
  let fixture: ComponentFixture<PostIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
