import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDataServiceService } from './services/http-data-service/http-data-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [HttpDataServiceService]
})
export class CoreModule { }
