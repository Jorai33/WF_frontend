import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostListComponent } from './components/blogpost-list/blogpost-list.component';
// import { ProjetListComponent } from "./components/projet-list/projet-list.component";
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpboardComponent } from './components/upboard/upboard.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ProjetDetailsComponent } from './components/projet-details/projet-details.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SolutionFormComponent } from './components/solution-form/solution-form.component';
import { ProjetCreateComponent } from './components/projet-create/projet-create.component';
import { BlogpostEditComponent } from './components/blogpost-edit/blogpost-edit.component';

const routes: Routes = [
  {path : "", component: UpboardComponent},
  {path : "blog", component: BlogpostListComponent},
  {path: "blog-posts/:id", component: BlogpostComponent },// localhost:4200/blog-posts/651515qvq
  {path: "projet", component: ProjetComponent},
  {path: "projet-create", component: ProjetCreateComponent},
  {path: "projets/:id", component: ProjetDetailsComponent },
  {path: "admin", component: AdminComponent},
  {path: "admin/blog-posts/:id", component: BlogpostEditComponent},
  {path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
