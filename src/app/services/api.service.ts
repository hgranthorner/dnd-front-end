import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:5000/api/'

  constructor(private readonly http: HttpClient) { }

  getRoom(id: number): Observable<Room> {
    const path = `${this.url}room/${id}`

    return this.http.get<Room>(path)
  }

  getRooms(): Observable<Room[]> {
    const path = `${this.url}rooms`

    return this.http.get<Room[]>(path)
  }
}
