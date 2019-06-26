import { Component, OnInit, ElementRef } from '@angular/core';
import {  FormGroupDirective } from "@angular/forms";
import { BlogpostService } from 'src/app/services/blogpost.service';
import { ActivatedRoute } from '@angular/router';
import { Blogpost } from 'src/app/models/blogpost';
@Component({
  selector: 'app-blogpost-edit',
  templateUrl: './blogpost-edit.component.html',
  styleUrls: ['./blogpost-edit.component.css']
})
export class BlogpostEditComponent implements OnInit {
  
  blogpostId: string;
  blogpost: Blogpost;

  constructor(  private blogpostServ: BlogpostService, private el: ElementRef, private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogpostId = this.route.snapshot.paramMap.get("id");
    this.blogpostServ.getBlogpostById(this.blogpostId)
    .subscribe(data => {
      this.blogpost = data;
    }, 
    error => console.error(error));
    

  }

  

  upload(){
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector("#image");
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if(fileCount > 0){
      formData.append("image", inputEl.files.item(0));
      this.blogpostServ.uploadImage(formData)
      .subscribe(data => console.log(data), error => console.error(error));
    }
  }

  updateBlogpost(formDirective : FormGroupDirective){
    // if (this.editForm.valid){
    //   console.log(this.editForm.value);
    //   this.blogpostServ.updateBlogpost(this.blogpostId, this.editForm.value)
    //   .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    // }

    const editedBlogpost = this.blogpost;
    this.blogpostServ
    .updateBlogpost(this.blogpostId, editedBlogpost)
    .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    }

  handleSuccess(data, formDirective){
    console.log("OK handleSuccess - blogpost updated", data);
    formDirective.reset();
    formDirective.resetForm();
    this.blogpostServ.dispatchBlogPostCreated(data._id);
  }

  handleError(error){
    console.error("KO handleError - blog post NOT updated", error);
  }

}
