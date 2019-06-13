import { Component, OnInit } from '@angular/core';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blogpost } from 'src/app/models/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  blogpost$: Observable<Blogpost>;

  constructor(private blogpostServ: BlogpostService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get("id"); // id du get correspond à la valeur passée en paramètre dans le routing
    this.blogpost$ = this.blogpostServ.getBlogpostById(id);
  }

}
