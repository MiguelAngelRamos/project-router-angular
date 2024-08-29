import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  user!: IUser;
  // http:localhost:4200/user/6
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUser(); // invoca al método getUser()
  }

  getUser() {
    this.activatedRoute.paramMap.subscribe( params => {
      let idUser:number = Number(params.get('id'));
      // id = 6
      // llamamos al servicio una vez que capturemos el id
      this.dataService.getUserById(idUser).subscribe(dataUser => this.user = dataUser );
    })
  }
}
