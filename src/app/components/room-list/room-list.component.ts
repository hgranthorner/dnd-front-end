import { Component, OnInit } from '@angular/core';
import { Room } from '@app/models';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[]
  selectedId: number

  constructor(private readonly api: ApiService) { }

  ngOnInit() {
    this.api.getRooms()
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms
      })
  }

}
