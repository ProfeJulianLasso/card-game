import { TestBed } from '@angular/core/testing';

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeDefined();
  });

  it('should return true', () => {
    // Arrange
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    const expected = true;
    const spy = spyOn(localStorage, 'getItem').and.returnValue('token');

    // Act
    const result = guard.canActivate(route, state);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should return false', () => {
    // Arrange
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    const expected = false;
    const spy = spyOn(localStorage, 'getItem').and.returnValue(null);

    // Act
    const result = guard.canActivate(route, state);

    // Assert
    expect(result).toEqual(expected);
  });
});
