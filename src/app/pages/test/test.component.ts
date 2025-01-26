import { SegmentedControlConfig } from './../../interfaces/ui-config/segmented-control-config.interface';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SegmentedControlComponent } from '../../components/segmented-control/segmented-control.component';
import { InputComponent } from '../../components/input/input.component';
import { RateChipComponent } from '../../components/rate-chip/rate-chip.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieCardConfig } from '../../interfaces/ui-config/movie-card-config.interface';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NavBarComponent,
    SegmentedControlComponent,
    InputComponent,
    RateChipComponent,
    MovieCardComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  segment: SegmentedControlConfig[] = [
    {
      name: 'All',
      active: true,
    },
    {
      name: 'Movies',
      active: false,
    },
    {
      name: 'TV Shows',
      active: false,
    },
  ];

  movieCard: MovieCardConfig[] = [
    {
      img: '../../../assets/images/logo.jpg',
      rate: 7,
      movieName: 'Bug Array',
    },
    {
      img: '../../../assets/images/logo.jpg',
      rate: 5,
      movieName: 'Bug Array',
    },
  ];
}
