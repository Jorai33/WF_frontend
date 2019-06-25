import { Component, OnInit } from '@angular/core';
import { Blogpost } from "../../models/Blogpost";
import { Observable } from 'rxjs';
import { BlogpostService } from 'src/app/services/blogpost.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    /*  Première façon de s'abonner à un Observable : 
   blogposts$: Observable<Blogpost[]>; */

   /* Autre façon de s'abonner à un Observable par la méthode subscribe*/
  allBlogposts: Blogpost[];
  

  constructor( private blogpostServ: BlogpostService) { }

  ngOnInit() {
    //  this.blogposts$ = this.blogpostServ.getBlogposts();
    this.blogpostServ.getBlogposts()
    .subscribe(data => this.refresh(data));

    this.blogpostServ.handleBlogPostCreated().subscribe(data => {
      console.log("AdminComponent received", data);
      this.refresh(data);
    });
  }

  deleteBlogPosts(selectedOptions){
   const ids = selectedOptions.map(so => so.value);
   if (ids.length === 1){
    this.blogpostServ.deleteSingleBlogpost(ids[0]).subscribe(data => this.refresh(data), err => this.handleError(err) );
   } else {
     return this.blogpostServ.deleteBlogPosts(ids).subscribe((data) => this.refresh(data), err => this.handleError(err));
   }
   
  }

  refresh(data){
    //console.log("data", data);
    this.blogpostServ.getBlogposts().subscribe(data => {
      this.allBlogposts = data;
    });
  }

  handleError(error){
    console.error(error);
  }

}
