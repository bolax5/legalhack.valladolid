import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDataService } from './services/http-data-service/http-data-service.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [HttpDataService]
})
export class CoreModule { }
