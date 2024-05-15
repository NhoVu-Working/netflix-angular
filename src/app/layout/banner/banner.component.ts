import {Component, OnInit} from '@angular/core';
import {VideoContent} from "../../shared/models/video-content.model";
import {DomSanitizer} from "@angular/platform-browser";
import {MovieService} from "../../core/services/movie.service";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  movieTitle: string = '';
  movieOverView: string = '';
  backgroundImageUrl: string = '';
  videoUrl: string = '';
  showVideo: boolean = false;


  constructor(private movieService: MovieService, public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadRandomMovie()
  }

  async loadRandomMovie():Promise<any> {
    this.movieService.getPopularMovies().subscribe((data: { results: VideoContent[] }) => {
      console.log('Random Movie', data.results)
      const randomIndex = Math.floor(Math.random() * data.results.length)
      const movie = data.results[randomIndex];
      this.movieTitle = movie.title;
      this.movieOverView = movie.overview;
      this.backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      this.movieService.getMovie(movie.id).subscribe(videoData => {
        console.log("video url" +videoData.results)
        if(videoData.results.length) {
          this.videoUrl=`https://www.youtube.com/embed/${videoData.results[0].key}`
        }
      })
    })
  }
  playMovie():void {
    this.showVideo=true;


  }


}
