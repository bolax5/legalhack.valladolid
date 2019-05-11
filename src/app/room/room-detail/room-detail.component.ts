import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room/room.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit  {
  id: string;
  document$: Observable<any>;
  currentVersion: string;
  documentContent: string;
  documentVersions$: Observable<any[]>;
  constructor(private activeRoute: ActivatedRoute, private roomService: RoomService) { }

   ngOnInit() {
    this.id = this.activeRoute.snapshot.params.id;
    this.roomService.setRoomChat(this.id);
    this.documentVersions$ = this.roomService.getDocumentVersions(this.id);
    this.document$ = this.roomService.getDocument(this.id);
  }
  setCurrentVersion() {
    this.document$ = this.roomService.getDocument(this.id, this.currentVersion);
  }




}
