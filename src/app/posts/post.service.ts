
import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn : 'root'})  //this can be done in app.module provider as well registering in there
export class PostService{
    private posts: Post[] = [];

getPosts()
{
//  return [...this.posts];  //new array with the older object
  return this.posts;
}

addPost(title:string,content:string)
{
    const post : Post ={title :title ,content:content};
    this.posts.push(post);

}
    
}