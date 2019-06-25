import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Projet } from "../models/Projet";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  baseUrl = "http://localhost:3000/api/v1/projets";

  constructor(private http: HttpClient ) { }

  createProjet( projet : Projet){
return this.http.post<Projet>(this.baseUrl, projet);
}

uploadDocument(formData: FormData){
  return this.http.post<any>(`${this.baseUrl}/documents`, formData);
}

  getProjets(): Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.baseUrl}/`);
  }

  getProjetById(id : string): Observable<Projet>{
    return this.http.get<Projet>(`${this.baseUrl}/${id}`);
  }

  deleteSingleProjet(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteProjets( ids: string[]){
    const allIds = ids.join(",");
    return this.http.delete(`${this.baseUrl}/?ids=${allIds}`);
  }

  
}
