import { Component,Input } from "@angular/core";

@Component({
  selector :'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponet
{
  // posts = [
  //   {title: 'First post' , content:'This is my first post\' s content' },
  //   {title: 'Secound post' , content:'This is my second post\' s content' },
  //   {title: 'Third post' , content:'This is my third post\' s content' },
  // ];

  @Input() posts :string[]=[];

}
