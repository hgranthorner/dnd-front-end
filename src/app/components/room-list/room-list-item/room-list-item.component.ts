import { Component, OnInit, Input, Output } from '@angular/core';
import { Room } from '@app/models';
import { EventEmitter } from 'events';

@Component({
  selector: 'room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.css']
})
export class RoomListItemComponent {
  @Input() room: Room
  @Output() roomId = new EventEmitter<number>()

  selectRoom(id: number) {
    this.roomId.emit(id)
  }
}
