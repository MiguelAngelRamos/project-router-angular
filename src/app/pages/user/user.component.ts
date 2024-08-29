import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  // http:localhost:4200/user/6
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUser(); // invoca al método getUser()
  }

  getUser() {
    this.activatedRoute.paramMap.subscribe(console.log)
  }
}
