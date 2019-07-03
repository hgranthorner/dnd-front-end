import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import {
  NavComponent,
  LoginComponent,
  AppComponent,
  HomeComponent,
  RoomListComponent,
  RoomListItemComponent
} from './components';
import { TodoService, AuthService, ApiService } from './services';
import { JWTInterceptor } from './helpers/jwt.interceptor';
import { SeedService } from './services/seed.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RoomListComponent,
    RoomListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    TodoService,
    AuthService,
    SeedService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
