import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Blogpost } from '../models/blogpost';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  baseUrl = "http://localhost:3000/api/v1/blog-posts";

  constructor( private http : HttpClient) { }

  getBlogposts(): Observable<Blogpost[]>{
    return this.http.get<Blogpost[]>(`${this.baseUrl}/`);
  }

  getBlogpostById(id: string ): Observable<Blogpost>{
    return this.http.get<Blogpost>(`${this.baseUrl}/${id}`);
  }


}
