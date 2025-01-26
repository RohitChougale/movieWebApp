import { Component, OnInit } from '@angular/core';
import { DetailBannerComponent } from '../../components/detail-banner/detail-banner.component';
import { ActivatedRoute } from '@angular/router';
import { GenericHttpService } from '../../services/generic-http.service';
import { HttpClientModule } from '@angular/common/http';
import { Endpoints } from '../../endpoints/endpoints';
import { DetailBannerConfig } from '../../interfaces/ui-config/detail-banner-config.interface';
import { RateChipComponent } from '../../components/rate-chip/rate-chip.component';
import { DetailConfig } from '../../interfaces/ui-config/detail-config.interface';
import {
  Genre,
  MovieDetailData,
} from '../../interfaces/ui-config/models/movie-detail.interface';
import { CommonModule } from '@angular/common';
import { TvDetailData } from '../../interfaces/ui-config/models/tv-detail.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  providers: [GenericHttpService],
  imports: [
    DetailBannerComponent,
    HttpClientModule,
    RateChipComponent,
    CommonModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  config!: DetailConfig;
  bannerConfig!: DetailBannerConfig;
  constructor(
    private activetedRoute: ActivatedRoute,
    private genericservice: GenericHttpService
  ) {}

  ngOnInit(): void {
    this.activetedRoute.paramMap.subscribe((paramMap: any) => {
      console.log(paramMap);
      if (paramMap.params.movie_id) {
        this.getMovieById(paramMap.params.movie_id);
      } else if (paramMap.params.series_id) {
        this.getTVshowById(paramMap.params.series_id);
      }
    });
  }

  getMovieById(id: string) {
    this.genericservice.httpGet(Endpoints.MOVIE_ID(id)).subscribe({
      next: (res: any) => {
        console.log(res, 'resss');
        this.bannerConfig = {
          img: Endpoints.IMAGE_BASE + `/w1280${res.backdrop_path}`,
          pageName: 'Movies',
          path: 'movies',
          title: res.original_tile,
        };
        let result = '';
        res.genres.map((item: Genre, i: number) => {
          result += item.name + '' + (i === res.genres.length - 1 ? '' : ',');
        });
        this.config = {
          img: Endpoints.IMAGE_BASE + `w500${res.poster_path}`,
          subtitle: res.tagline,
          description: res.overview,
          rate: res.vote_average,
          isVertical: true,
          detailCards: [
            {
              title: 'Type',
              description: 'Movie',
            },
            {
              title: 'Release date',
              description: res.release_date,
            },
            {
              title: 'Run time',
              description: res.runtime,
            },
            {
              title: 'Genres',
              description: result,
            },
          ],
        };
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  getTVshowById(id: string) {
    this.genericservice.httpGet(Endpoints.TV_SHOW_ID(id)).subscribe({
      next: (res: TvDetailData) => {
        console.log(res);
        this.bannerConfig = {
          img: Endpoints.IMAGE_BASE + `/w1280${res.backdrop_path}`,
          pageName: 'TV Shows',
          path: 'tvshows',
          title: res.name,
        };

        let result = '';
        res.genres.map((item: Genre, i: number) => {
          result += item.name + '' + (i === res.genres.length - 1 ? '' : ',');
        });
        this.config = {
          img: Endpoints.IMAGE_BASE + `w500${res.poster_path}`,
          subtitle: res.tagline,
          description: res.overview,
          rate: res.vote_average,
          isVertical: false,
          detailCards: [
            {
              title: 'Type',
              description: 'Tv Show',
            },
            {
              title: 'status',
              description: res.status,
            },
            {
              title: 'First air date',
              description: res.first_air_date,
            },
            {
              title: 'Last air date',
              description: res.last_air_date,
            },
            {
              title: 'No of seasons',
              description: res.number_of_seasons.toString(),
            },
            {
              title: 'No of Episodes',
              description: res.episode_run_time.toString(),
            },
            {
              title: 'Genres',
              description: result,
            },
          ],
        };
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
