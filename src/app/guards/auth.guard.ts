import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) { }

  canActivate(): boolean {
    const currentUser = this.auth.currentUserValue
    if (currentUser) {
      return true
    } else {
      this.router.navigate(['/login'])
    }
  }
}
