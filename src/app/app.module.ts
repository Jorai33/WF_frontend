import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { BlogpostListComponent } from './components/blogpost-list/blogpost-list.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpboardComponent } from './components/upboard/upboard.component';
import { ProjetDetailsComponent } from './components/projet-details/projet-details.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostListComponent,
    ProjetComponent,
    ProjetListComponent,
    ErrorPageComponent,
    AdminComponent,
    UpboardComponent,
    ProjetDetailsComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
