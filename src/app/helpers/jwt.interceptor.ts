import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { AuthService } from '../services';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private readonly auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const currentUser = this.auth.currentUserValue
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${currentUser.token}` }
      })
    }

    return next.handle(request)
  }
}