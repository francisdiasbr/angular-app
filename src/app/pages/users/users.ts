import { Component, OnInit, signal } from '@angular/core';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users = signal<any[]>([]);
  loading = signal(true);

  // injeta o service criado
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // chama o metodo criado no service e aceita um objeto com 2 callbacks, next e error
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    })
  }
}
