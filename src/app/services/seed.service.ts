import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  private readonly env = environment;

  constructor(
    private readonly http: HttpClient
  ) { }

  seed(): Observable<number> {
    const path = `${this.env.apiUrl}/seed`
    return this.http.post<number>(path, {})
  }
}
