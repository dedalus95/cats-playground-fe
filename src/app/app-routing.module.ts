import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {Path} from "../shared/constants/path";
import {LoginComponent} from "../features/login/login.component";
import {HomeComponent} from "../features/home/home.component";
import {AuthGuard} from "../core/guard/auth.guard";


const routes: Routes = [
  {
    path: Path.Login,
    component: LoginComponent
  },
  {
    path: Path.Home,
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: Path.Home
  }
];

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
