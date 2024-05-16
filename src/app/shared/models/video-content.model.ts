import {SafeResourceUrl} from "@angular/platform-browser";

export interface VideoContent {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  release_date?: string;
  first_air_date?: string;
  backdrop_path?: string;
  genres?: string;
  origin_country?: string | [];
  original_language?: string | [];
  revenue?: string;
  spoken_languages?: string | [];
  status?: string;
  videoUrl?:SafeResourceUrl|string;

}
