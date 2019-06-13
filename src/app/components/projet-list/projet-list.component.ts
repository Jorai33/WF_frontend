import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from "../../models/Projet";
import { ProjetService } from "../../services/projet.service";


@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {
  projetList$: Observable<Projet[]>;

  constructor(private projetServ: ProjetService) { }

  ngOnInit() {
    this.projetList$ = this.projetServ.getProjets();
  }

}
