import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective} from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet-create',
  templateUrl: './projet-create.component.html',
  styleUrls: ['./projet-create.component.css']
})
export class ProjetCreateComponent implements OnInit {
  creationForm: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private projetServ: ProjetService) { }

  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.creationForm = this.fb.group({
      nom: "",
      besoinsClient: "",
      siren : ""

    });
    // this.firstFormGroup = this.fb.group({
      
    //   nom: "",
    //   besoinsClient: ""
    // });
    // this.secondFormGroup = this.fb.group({
    //  
    // });
  }
  createProjet(formDirective: FormGroupDirective) {
    if (this.creationForm.valid) {
      console.log(this.creationForm.value);
      this.projetServ.createProjet(this.creationForm.value)
        .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
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
