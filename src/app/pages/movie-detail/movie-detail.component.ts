import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from "../../core/services/movie.service";
import {VideoContent} from "../../shared/models/video-content.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    HeaderComponent,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  movie: VideoContent | string = '';
  videoUrl?: SafeResourceUrl = '';
  backgroundUrl?: SafeResourceUrl | string | null = ''
  title: string = '';
  overview: string = '';
  genres: any = [];
  releaseDate?: string = '';
  voteAverage?: string = ''
  originCountry?: string | [] = '';
  originalLanguage?: string | [] = '';
  revenue?: string = '';

  showVideo: boolean = false;

  constructor(private route: ActivatedRoute, private movieService: MovieService, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId: number = params['id']
      this.getMovieKey(movieId)
      this.getMovieDetail(movieId)
    })
  }

  getMovieKey(movieId: number) {
    this.movieService.getMovie(movieId).subscribe(data => {
      if (data.results.length > 0) {
        const movieKey = data.results[0].key
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${movieKey}`)
        // console.log(`video url  ${this.videoUrl}`)
      }
    })

  }

  getMovieDetail(movieId: number) {
    this.movieService.getMovieDetail(movieId).subscribe((data: VideoContent) => {
      console.log(data)
      this.movie = data;
      this.backgroundUrl = data['backdrop_path']
      this.title = data['title']
      this.overview = data['overview']
      this.genres = data['genres']
      this.releaseDate = data['release_date']
      this.voteAverage = data['vote_average']
      this.originCountry = data["origin_country"]
      this.originalLanguage = data['original_language'];
      this.revenue = data['revenue'];


    })

  }

  playMovie(event: Event) {
    event.stopPropagation();
    this.showVideo = true;
  }


}
