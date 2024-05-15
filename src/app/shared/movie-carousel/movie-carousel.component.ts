import {Component, Input, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {VideoContent} from "../models/video-content.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieCarouselComponent {
  @Input() title: string = '';
  @Input() movies: VideoContent[] = [];

  getMovieImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
