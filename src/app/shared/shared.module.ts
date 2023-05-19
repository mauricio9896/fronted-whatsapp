import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [],
  exports:[
    FormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
