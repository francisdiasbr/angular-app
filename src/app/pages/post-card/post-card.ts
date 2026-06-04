import { Component, Input } from '@angular/core';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})

export class PostCard {

  @Input() post!: Post;
  
}

