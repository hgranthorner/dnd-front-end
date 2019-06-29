import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { NavComponent, LoginComponent, AppComponent } from './components';
import { HomeComponent } from './components/home/home.component'
import { TodoService, AuthService, ApiService } from './services';
import { JWTInterceptor } from './helpers/jwt.interceptor';
import { SeedService } from './services/seed.service';
import { RoomListComponent } from './components/room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RoomListComponent
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
