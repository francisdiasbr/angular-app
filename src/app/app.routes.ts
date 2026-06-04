import { Routes } from '@angular/router';
import { Users } from './pages/users/users';

export const routes: Routes = [
  {path: 'users', component: Users},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
];
