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
  /*  Première façon de s'abonner à un Observable : */
   blogposts$: Observable<Blogpost[]>; 
  
  
  /* Autre façon de s'abonner à un Observable par la méthode subscribe
  allBlogposts: Blogpost[];*/


  constructor( private blogpostServ: BlogpostService) { }

  ngOnInit() {
     this.blogposts$ = this.blogpostServ.getBlogposts();
    // this.blogpostServ.getBlogposts()
    // .subscribe(data => {
    //   console.log(data);
    //   this.allBlogposts = data;
    // });
  }

}
