import { Component,Input, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";

//parentComponent
@Component({
  selector :'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponet implements OnInit
{

  // posts = [
  //   {title: 'First post' , content:'This is my first post\' s content' },
  //   {title: 'Secound post' , content:'This is my second post\' s content' },
  //   {title: 'Third post' , content:'This is my third post\' s content' },
  // ];

  posts: Post[] = [];
  

  constructor(public postService: PostService)
  {
    
  }
  ngOnInit() {
    this.posts = this.postService.getPosts();
   
  }
}
