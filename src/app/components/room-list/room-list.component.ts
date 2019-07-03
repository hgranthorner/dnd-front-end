import { Component, OnInit } from '@angular/core';
import { Room } from '@app/models';
import { ApiService } from '@app/services';
import { SeedService } from '@app/services/seed.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[]
  selectedId: number

  constructor(
    private readonly api: ApiService,
    private readonly seed: SeedService) { }

  ngOnInit() {
    this.api.getRooms()
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms
      })
  }

  seedRooms() {
    this.seed.seedRooms()
      .subscribe()
  }

  selectRoom(id: number) {
    if (this.selectedId) {
      this.selectedId = 0
    } else {
      this.selectedId = id
    }
  }
}
