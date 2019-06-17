import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';
import { ProjetService } from 'src/app/services/projet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.css']
})
export class ProjetDetailsComponent implements OnInit {
  projet$ : Observable<Projet>;

  constructor(private projetServ : ProjetService, private route : ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id"); 
    this.projet$ = this.projetServ.getProjetById(id);

  }

  onDeleteClick(id: string){
    if (confirm("Voulez-vous vraiment supprimer ce projet ?")){
      this.projetServ.deleteSingleProjet(id).subscribe((data) => {
        console.log(data);
      });    
    }
  }

}
 // onDeleteClick(){
  //   if(confirm("Etes-vous sûr ?")){
  //     this.clientServ.deleteClient(this.client);
  //     this.flashMessage.show("Client supprimé", { 
  //       cssClass: 'alert-success', timeout : 4000
  //     });
  //     this.router.navigate(['/']);

  //   }
  // }