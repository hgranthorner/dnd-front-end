import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../models'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:5000/auth/'
  currentUser: Observable<User>
  private currentUserSubject: BehaviorSubject<User>

  constructor(private readonly http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(userName: string, password: string) {
    const path = `${this.url}login`
    return this.http.post<User>(path, { userName, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        return user
      }))
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
