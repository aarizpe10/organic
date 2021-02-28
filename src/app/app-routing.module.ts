import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: CarouselComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   }