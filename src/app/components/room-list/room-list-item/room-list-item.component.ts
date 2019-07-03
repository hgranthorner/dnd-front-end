import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Room } from '@app/models';

@Component({
  selector: 'room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.css']
})
export class RoomListItemComponent {
  @Input() room: Room
  @Output() roomSelector = new EventEmitter<number>()

  selectRoom(id: number) {
    this.roomSelector.emit(id)
  }
}
