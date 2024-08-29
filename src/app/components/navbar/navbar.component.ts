import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = "{JSON} Placeholder";
  optsNavbar = [
    {path: '/home', name: 'Home'}, //opt
    {path: '/users', name: 'Users'},
    {path: '/photo', name: 'Photo'}
  ]

}
