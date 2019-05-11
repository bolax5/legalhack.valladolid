import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class HttpDataService {

  constructor(private http: HttpClient, private fire: AngularFireDatabase) {
  }

  public httpGet(path, data?): Observable<any> {
    return this.http.get(`${environment.laravel.url}/${path}`, {params: data});
  }

  public fireGetList(list: string): Observable<any[]> {
    return this.fire.list(list).valueChanges();
  }

  public firePushItem(list: string, item: any) {
    this.fire.list(list).push(item);
  }
}
