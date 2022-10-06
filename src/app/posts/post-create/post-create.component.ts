import { Component,EventEmitter,Output } from "@angular/core";


@Component({

  selector :'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateCompopnent
{
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();
  // onAddPost(postInput:HTMLTextAreaElement){
  //   this.newPost = postInput.value;
  //

  onAddPost()
  {
    let post = {
      title: this.enteredTitle,
                  content : this.enteredContent
    };
    console.log(post.title);
    console.log(post.content);
                this.postCreated.emit(post);
  }
}
