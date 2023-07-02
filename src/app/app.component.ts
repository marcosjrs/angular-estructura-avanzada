import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './core/models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly httpClient:HttpClient){}

  ngOnInit(): void {
    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.commmm/posts').subscribe(
      {
        next:(posts) => console.log(posts.length),
        error:(err) => console.log('Error', err)
      }
    )
  }

}
