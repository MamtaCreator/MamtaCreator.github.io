import { Component,Input, OnDestroy, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";
import { Subscription } from 'rxjs';
//parentComponent
@Component({
  selector :'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponet implements OnInit, OnDestroy
{

  // posts = [
  //   {title: 'First post' , content:'This is my first post\' s content' },
  //   {title: 'Secound post' , content:'This is my second post\' s content' },
  //   {title: 'Third post' , content:'This is my third post\' s content' },
  // ];

  posts: Post[] = [];
  private postsSub: Subscription = new Subscription;

  constructor(public postService: PostService)
  {
    
  }
  ngOnInit() {
    this.postService.getPosts();
    this.postService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;

      });   
  }

  ngOnDestroy()
  {
    this.postsSub.unsubscribe();

  }
}
