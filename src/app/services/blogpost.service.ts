import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Blogpost } from '../models/blogpost';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  baseUrl = "http://localhost:3000/api/v1/blog-posts";
  private blogPostCreated = new Subject<string>();

  constructor( private http : HttpClient) { }

  createBlogpost(post: Blogpost) {
    return this.http.post<Blogpost>(this.baseUrl, post);
  }

  dispatchBlogPostCreated(id: string){
    this.blogPostCreated.next(id);
  }
  handleBlogPostCreated(){
    return this.blogPostCreated.asObservable();
  }

  getBlogposts(): Observable<Blogpost[]>{
    return this.http.get<Blogpost[]>(`${this.baseUrl}/`);
  }

  getBlogpostById(id: string ): Observable<Blogpost>{
    return this.http.get<Blogpost>(`${this.baseUrl}/${id}`);
  }

  deleteSingleBlogpost(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteBlogPosts( ids: string[]){
    const allIds = ids.join(",");
    return this.http.delete(`${this.baseUrl}/?ids=${allIds}`);

  }

}
