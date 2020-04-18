import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmpComponent } from     './emp/emp.component';
import { PagenotComponent } from './pagenot/pagenot.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'emp', component: EmpComponent},
  { path: '**', component: PagenotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
                    SignupComponent, EmpComponent, PagenotComponent]
