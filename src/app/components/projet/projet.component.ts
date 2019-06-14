import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';
import { ProjetService } from 'src/app/services/projet.service';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projets$: Observable<Projet[]>;

  constructor(private projetServ: ProjetService) { }

  ngOnInit() {
    this.projets$ = this.projetServ.getProjets();
  }

}
