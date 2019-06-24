import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/models';
import { AuthService } from '@app/services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  users: any[];

  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.users = [{ name: 'fred' }]
  }
}