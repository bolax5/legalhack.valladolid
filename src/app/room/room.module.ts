import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomService } from './services/room/room.service';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RoomListComponent, RoomDetailComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    SharedModule
  ],
  providers: [RoomService]
})
export class RoomModule { }
