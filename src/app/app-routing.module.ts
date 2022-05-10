import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './Screens/features/features.component';
import { LoginComponent } from './Screens/login/login.component';
import { HomescreenComponent } from './Screens/homescreen/homescreen.component';
import { UsersComponent } from './Screens/users/users.component';
import { RegisterComponent } from './Screens/register/register.component';
import { UserdetailComponent } from './Screens/userdetail/userdetail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomescreenComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'features', pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'userdetail', pathMatch: 'full' },
  { path: 'userdetail', component: UserdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
