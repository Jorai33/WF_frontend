import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";

import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { BlogpostListComponent } from './components/blogpost-list/blogpost-list.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpboardComponent } from './components/upboard/upboard.component';
import { ProjetDetailsComponent } from './components/projet-details/projet-details.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SolutionFormComponent } from './components/solution-form/solution-form.component';
import { ProjetCreateComponent } from './components/projet-create/projet-create.component';
import { BlogpostCreateComponent } from './components/blogpost-create/blogpost-create.component';
import { BlogpostEditComponent } from './components/blogpost-edit/blogpost-edit.component';



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
    TableauDeBordComponent,
    HomepageComponent,
    DashboardComponent,
    SolutionFormComponent,
    ProjetCreateComponent,
    BlogpostCreateComponent,
    BlogpostEditComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
