import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogpost } from 'src/app/models/blogpost';
import { BlogpostService } from 'src/app/services/blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  // $ pour montrer qu'il s'agit d'un Observable par convention
  blogPostList$: Observable<Blogpost[]>;

  constructor( private blogpostServ : BlogpostService) { }

  ngOnInit() {
    this.blogPostList$ = this.blogpostServ.getBlogposts();
  }

  

}
