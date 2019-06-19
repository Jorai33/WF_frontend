import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet-create',
  templateUrl: './projet-create.component.html',
  styleUrls: ['./projet-create.component.css']
})
export class ProjetCreateComponent implements OnInit {
creationForm : FormGroup;
  constructor(private fb : FormBuilder, private projetServ : ProjetService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.creationForm = this.fb.group({
      nom:"",
      besoinsClient: ""

    })
  }
  createProjet(){
    if(this.creationForm.valid){
      console.log(this.creationForm.value);
      this.projetServ.createProjet(this.creationForm.value)
      .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    }
    
  }

  handleSuccess(data){
    console.log("Projet créé", data);
  }

  handleError(error){
    console.error("Echec de création du projet", error);
  }






}
