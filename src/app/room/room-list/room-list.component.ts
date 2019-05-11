import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from '../services/room/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  rooms$: Observable<any>;

  constructor(private roomService: RoomService, private router: Router) {
    this.rooms$ = this.roomService.getRoomList();
   }

   public joinRoom(roomId) {
    this.router.navigate([`room/${roomId}`]);
   }

}
