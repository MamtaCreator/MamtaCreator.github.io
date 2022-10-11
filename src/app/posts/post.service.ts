
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn : 'root'})  //this can be done in app.module provider as well registering in there
export class PostService{
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();


  constructor(private http: HttpClient) {

  }

getPosts()
{
   //return [...this.posts];  //new array with the older object
  //return this.posts;

  this.http.get<{ message: string, Posts: Post[] }>('http://localhost:3000/api/posts')
    .subscribe((postData) => {
      this.posts = postData.Posts;
      this.postUpdated.next([...this.posts])
    });


  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

addPost(title:string,content:string)
{
  const post: Post = { id: "", title: title, content: content };
  this.http.post<{ message: string }>("http://localhost:3000/api/posts", post)
    .subscribe((resData) => {
      console.log(resData.message);
      this.posts.push(post);
      this.postUpdated.next([...this.posts])

    });
  

}
    
}
