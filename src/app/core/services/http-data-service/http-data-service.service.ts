import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
export class HttpDataService {

  constructor(private fire: AngularFireDatabase) {
   }

   public fireGetList(list: string): Observable<any[]> {
     return this.fire.list(list).valueChanges();
   }

   public firePushItem(list: string, item: any) {
     this.fire.list(list).push(item);
   }
}
