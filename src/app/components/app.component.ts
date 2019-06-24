import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/services';
import { User } from '@app/models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}