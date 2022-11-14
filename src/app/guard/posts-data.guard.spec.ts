import { TestBed } from '@angular/core/testing';

import { PostsDataGuard } from './posts-data.guard';

describe('PostsDataGuard', () => {
  let guard: PostsDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostsDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
