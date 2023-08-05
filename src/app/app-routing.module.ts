import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [   
{ path: "", redirectTo: "/", pathMatch: "full" },
{ path: "", component: LoginPageComponent },
{ path: "sign-up", component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
