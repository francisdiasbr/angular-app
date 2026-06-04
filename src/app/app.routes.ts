import { Routes } from '@angular/router';
import { Users } from './pages/users/users';
import { Posts } from './pages/posts/posts';

export const routes: Routes = [
  {path: 'users', component: Users},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'posts', component: Posts}
];
