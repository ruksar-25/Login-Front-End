import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'display-data', component: DisplayDataComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details', component: ListUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
