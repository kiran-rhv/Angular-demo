import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  // ngOnInit(): void {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}
