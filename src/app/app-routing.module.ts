import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostListComponent } from './components/blogpost-list/blogpost-list.component';
import { ProjetListComponent } from "./components/projet-list/projet-list.component";

const routes: Routes = [
  {path : "", component: BlogpostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }