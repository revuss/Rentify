import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthorizationService } from './Auth/Service/authorization.service';
import { response } from 'express';

export const authRedirectGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const userService = inject(AuthorizationService);
  const router = inject(Router);

  return userService.checkAuth().pipe(
    map((response) => {
      if (response.authenticated) {
        router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }),
    catchError(() => {
      return of(true);
    })
  );
};
