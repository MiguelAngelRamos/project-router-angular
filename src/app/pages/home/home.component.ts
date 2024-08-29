import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../../interfaces/IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  posts:IPost [] = [];
  constructor(private dataService:DataService) {

  }
  ngOnInit(): void {
    
    this.dataService.getPosts().subscribe(data => this.posts = data );
  }
}
