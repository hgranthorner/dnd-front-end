import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, HomeComponent } from './components'
import { AuthGuard } from './guards';
import { RoomListComponent } from './components/room-list/room-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // home route protected by auth guard
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'rooms', component: RoomListComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
