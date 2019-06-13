import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Projet } from "../models/Projet";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  baseUrl = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient ) { }

  getProjets(): Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.baseUrl}/projets`);
  }
}
