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
  RoomListItemComponent,
  CharacterListComponent
} from './components';
import { AuthService, ApiService, SeedService } from './services';
import { JWTInterceptor } from './helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RoomListComponent,
    RoomListItemComponent,
    CharacterListComponent,
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
    AuthService,
    SeedService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
