import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective} from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-create',
  templateUrl: './projet-create.component.html',
  styleUrls: ['./projet-create.component.css']
})
export class ProjetCreateComponent implements OnInit {
  creationForm: FormGroup;
  isLinear = false;

  
  
  constructor(private fb: FormBuilder, private projetServ: ProjetService, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    this.createForm();
    
  }

  

  createForm() {
    this.creationForm = this.fb.group({
      nom: "",
      besoinsClient: "",
      siren : "",
      nomDirigeant:"",
      nomEntreprise:"",
      adresseEntreprise:"",
      codePostalEntreprise:"",
      villeEntreprise:"",
      prenomDirigeant:"",
      adresse:"",
      codePostal:"",
      ville: "",
      telephone:"",
      email:"",
      document: ""

    });
  }

  upload(){
    
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector("#document");
    let fileCount: number = inputEl.files.length;
   if(fileCount > 0){
     let formData = new FormData();
     formData.append("document", inputEl.files.item(0));
     this.projetServ.uploadDocument(formData).subscribe(data => console.log(data), error => console.error(error));
   }
  }

    
     
  createProjet(formDirective: FormGroupDirective) {
    if (this.creationForm.valid) {
      console.log(this.creationForm.value);
      this.projetServ.createProjet(this.creationForm.value)
        .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
      this.router.navigate(['/']);
    }

  }

  handleSuccess(data, formDirective) {
    console.log("Projet créé", data);
    this.creationForm.reset();
    formDirective.resetForm();
  }

  handleError(error) {
    console.error("Echec de création du projet", error);
  }






}
