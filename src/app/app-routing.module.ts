import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostListComponent } from './components/blogpost-list/blogpost-list.component';
// import { ProjetListComponent } from "./components/projet-list/projet-list.component";
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpboardComponent } from './components/upboard/upboard.component';

const routes: Routes = [
  {path : "", component: UpboardComponent},
  {path : "blog", component: BlogpostListComponent},
  {path: "blog-posts/:id", component: BlogpostComponent },// localhost:4200/blog-posts/651515qvq
  {path: "admin", component: AdminComponent},
  {path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
