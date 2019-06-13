import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule
  ]
})
export class MaterialModule { }
