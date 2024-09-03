import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser [] = []; // propiedad
  constructor(private readonly dataService: DataService){}

  ngOnInit(): void {
    this.getUserAll();
  }

  getUserAll() {
    this.dataService.getUserAll().subscribe( usersData => {
      this.users = usersData;
    });
  }

}
