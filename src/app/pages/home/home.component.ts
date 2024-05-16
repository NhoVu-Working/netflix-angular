import {Component, inject, OnInit} from '@angular/core';
import {MovieService} from "../../core/services/movie.service";
import {BannerComponent} from "../../layout/banner/banner.component";
import {HeaderComponent} from "../../layout/header/header.component";
import {VideoContent} from "../../shared/models/video-content.model";
import {MovieCarouselComponent} from "../../shared/movie-carousel/movie-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    HeaderComponent,
    MovieCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private movieService = inject(MovieService);
  popularOnNetflix:VideoContent[]=[];
  nowPlayingMovies: VideoContent[] = [];
  popularMovies: VideoContent[] = [];
  topRateMovies: VideoContent[] = [];
  upComingMovies: VideoContent[] = [];

  ngOnInit() {
    this.loadMovies()

  }

  loadMovies(): void {
    this.movieService.getNowPlayingMovies().subscribe(data => {
      this.nowPlayingMovies = data.results;

    });
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;

    });
    this.movieService.getDiscoveryMovie().subscribe(data => {
      this.popularOnNetflix=data.results;
    })
    this.movieService.getTopRateMovies().subscribe(data => {
      this.topRateMovies=data.results;

    })
    this.movieService.getUpcomingMovies().subscribe(data => {

      this.upComingMovies=data.results;
    })

  }

}
