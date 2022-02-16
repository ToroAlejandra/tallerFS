import { TestBed } from '@angular/core/testing';

import { AuthJWTInterceptor } from './auth-jwt.interceptor';

describe('AuthJWTInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthJWTInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthJWTInterceptor = TestBed.inject(AuthJWTInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
