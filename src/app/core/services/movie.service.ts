import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {movieConfig} from "../../enviroments/enviroments";
import {VideoContent} from "../../shared/models/video-content.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = "https://api.themoviedb.org/3";
  private apiKey: string = movieConfig.tmdbApiKey;


  constructor(private http: HttpClient) {
  }

  getDiscoveryMovie(): Observable<any> {
    return this.http.get<VideoContent[]>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US`)

  }

  getNowPlayingMovies(): Observable<any> {
    return this.http.get<VideoContent>(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US`)
  }

  getPopularMovies(): Observable<any> {
    return this.http.get<VideoContent>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US`)

  }

  getTopRateMovies(): Observable<any> {
    return this.http.get<VideoContent>(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-Us`)

  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get<VideoContent>(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=en-US`)

  }

  getMovieById(id: number): Observable<any> {
    return this.http.get<VideoContent>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`)

  }
  getMovie(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`)

  }
  getMovieDetail(movieId: number): Observable<VideoContent> {
    return this.http.get<VideoContent>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US&append_to_response=videos`);
  }


  getBannerImage(id: number): Observable<any> {

    return this.http.get<VideoContent>(`https://api.themoviedb.org/3/movie/${id}/images`)
  }

  getBannerVideo(id: number): Observable<any> {
    return this.http.get<VideoContent>(`https://api.themoviedb.org/3/movie/${id}/videos`)

  }

  getBannerDetail(id: number): Observable<any> {
    return this.http.get<VideoContent>(`https://api.themoviedb.org/3/movie/${id}`)
  }


}
