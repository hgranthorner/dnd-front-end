import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room, Character } from '@app/models';
import { Observable } from 'rxjs';

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

  getCharacter(characterId: number): Observable<Character> {
    const path = `${this.url}characters/${characterId}`

    return this.http.get<Character>(path)
  }


  getCharacters(userId: number): Observable<Character[]> {
    const path = `${this.url}characters/${userId}`

    return this.http.get<Character[]>(path)
  }
}
