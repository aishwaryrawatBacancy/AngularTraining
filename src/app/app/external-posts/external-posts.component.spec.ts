import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPostsComponent } from './external-posts.component';

describe('ExternalPostsComponent', () => {
  let component: ExternalPostsComponent;
  let fixture: ComponentFixture<ExternalPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
