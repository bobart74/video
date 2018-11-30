import { Component, OnInit } from '@angular/core';
import { LatestVideoService } from '../latest-video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [
    LatestVideoService
  ]
})
export class VideoListComponent implements OnInit {

  movies = [];

  constructor(
    public latestVideosService: LatestVideoService
  ) { }

  ngOnInit() {
    this.latestVideosService.fetchMovies()
    .then((movies) => {
      this.movies = movies;
    });
  }

}
