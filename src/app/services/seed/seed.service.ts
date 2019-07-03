import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '@environments/environment'
import { User } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  private readonly env = environment;

  constructor(
    private readonly http: HttpClient
  ) { }

  seedUsers(): Observable<User[]> {
    const path = `${this.env.apiUrl}/seed/users`
    return this.http.post<User[]>(path, {})
  }

  seedRooms(): Observable<any> {
    const path = `${this.env.apiUrl}/seed/rooms`
    return this.http.post<any>(path, {})
  }
}
