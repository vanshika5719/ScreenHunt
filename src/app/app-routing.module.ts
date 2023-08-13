import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {SearchResultComponent} from './search-result/search-result.component';

const routes: Routes = [   
{ path: "", redirectTo: "/", pathMatch: "full" },
{ path: "", component: LandingPageComponent },
{ path: "login", component: LoginPageComponent },
{ path: "sign-up", component: SignUpComponent },
{path:"search-page" , component:SearchPageComponent},
{path:"search-result", component:SearchResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
