import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  optsNavbar = [
    {path: '/home', name: 'Home'},
    {path: '/home', name: 'Users'},
    {path: '/photo', name: 'Photo'}
  ]

}
