import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDataService } from './services/http-data-service/http-data-service.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RootReducers } from './stores';

const COMPONENTS = [
  HeaderComponent, MenuComponent, FooterComponent, ChatComponent
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(RootReducers)
  ],
  providers: [HttpDataService],
  exports: [...COMPONENTS]
})
export class CoreModule { }
