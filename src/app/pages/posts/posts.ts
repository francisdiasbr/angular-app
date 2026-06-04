import { Component, OnInit, signal } from '@angular/core';
import { PostsService } from '../../services/posts';
import { PostCard } from '../post-card/post-card';
@Component({
  selector: 'app-posts',
  imports: [PostCard],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit {
  posts = signal<any[]>([]);
  loading = signal(true);

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
}
