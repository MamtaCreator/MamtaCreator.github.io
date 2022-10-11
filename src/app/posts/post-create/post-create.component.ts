import { Component,EventEmitter,Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";
import { PostService } from "../post.service";

//childComponent
@Component({

  selector :'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateCompopnent
{
  enteredContent = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter<Post>();
  // onAddPost(postInput:HTMLTextAreaElement){
  //   this.newPost = postInput.value;
  //:

  /**
   *
   */
  constructor(public postService:PostService) 
  {
    
     
  }
  onAddPost(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    // let post: Post = {
    //   title: form.value.title,
    //   content : form.value.content
    // };
    
    this.postService.addPost(form.value.title,form.value.content);
    // this.postCreated.emit(post);
    form.resetForm();
  }
}
