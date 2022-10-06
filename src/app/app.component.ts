import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   storePosts :string[] =[];
   onPostAdded(post:any)
   {

    this.storePosts.push(post);
   }
}
