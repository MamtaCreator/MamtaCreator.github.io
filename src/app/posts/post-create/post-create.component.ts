import { Component } from "@angular/core";


@Component({

  selector :'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateCompopnent
{
  enteredValue = '';
  newPost = 'No data';
  // onAddPost(postInput:HTMLTextAreaElement){
  //   this.newPost = postInput.value;
  //

  onAddPost()
  {
   this.newPost = this.enteredValue ;
  }
}
