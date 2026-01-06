import { AuthService } from '@/services/api/auth/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuth().pipe(
    map(response => true),
    catchError(error => {
      router.navigateByUrl('/auth/login');
      return of(false);
    })
  );
};