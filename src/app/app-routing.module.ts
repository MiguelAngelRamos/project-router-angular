import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

// http://localhost:4200/
// http://localhost:4200/user/:id
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
