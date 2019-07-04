import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, HomeComponent, CharacterListComponent, RoomListComponent } from './components'
import { AuthGuard } from './guards';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // home route protected by auth guard
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'rooms', component: RoomListComponent, canActivate: [AuthGuard] },
  { path: 'characters', component: CharacterListComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
