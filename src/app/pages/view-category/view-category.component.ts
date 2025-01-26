import { MovieDetailData } from './../../interfaces/ui-config/models/movie-detail.interface';
import { Component, OnInit } from '@angular/core';
import { MovieCardConfig } from '../../interfaces/ui-config/movie-card-config.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericHttpService } from '../../services/generic-http.service';
import { HttpClientModule } from '@angular/common/http';
import { Endpoints } from '../../endpoints/endpoints';
import {
  MovieData,
  MovieResult,
} from '../../interfaces/ui-config/models/movies.interface';
import {
  TVData,
  TVResult,
} from '../../interfaces/ui-config/models/tv.interface';
import { InputComponent } from '../../components/input/input.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-view-category',
  standalone: true,
  providers: [GenericHttpService],
  imports: [HttpClientModule, InputComponent, MovieCardComponent],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss',
})
export class ViewCategoryComponent implements OnInit {
  title: string = '';
  movieCards: MovieCardConfig[] = [];

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private generichttpservice: GenericHttpService
  ) {}

  ngOnInit(): void {
    this.activatedroute.url.subscribe((res) => {
      console.log(res, 'catojhgjh');
      this.title = res[0].path.includes('movie') ? 'Movies' : 'TV Shows';
      if (this.title === 'Movies') {
        this.getAllMovies();
      } else if (this.title === 'TV Shows') {
        this.getAllTvShows();
      } else {
        this.router.navigateByUrl('');
      }
    });
  }

  getAllMovies() {
    this.generichttpservice.httpGet(Endpoints.MOVIES).subscribe({
      next: (res: MovieData) => {
        console.log(res);
        this.movieCards = res.results.map((item: MovieResult) => {
          return {
            img: Endpoints.IMAGE_BASE + `/w500${item.backdrop_path}`,
            movieName: item.original_title,
            rate: item.vote_average,
            onClick: () => {
              this.router.navigateByUrl(`movies/${item.id}`);
            },
          } as MovieCardConfig;
        });
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  getAllTvShows() {
    this.generichttpservice.httpGet(Endpoints.TV_SHOWS).subscribe({
      next: (res: TVData) => {
        console.log(res);
        this.movieCards = res.results.map((item: TVResult) => {
          return {
            img: Endpoints.IMAGE_BASE + `/w500${item.backdrop_path}`,
            movieName: item.name,
            rate: item.vote_average,
            onClick: () => {
              this.router.navigateByUrl(`tvshows/${item.id}`);
            },
          } as MovieCardConfig;
        });
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
