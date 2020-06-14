import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from '../../api.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css']
})
export class MovieDetialsComponent implements OnInit {

  @Input() movie: Movie;
  @Output() updateMovie = new EventEmitter<Movie>();
  rateHovered = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  faStar = faStar;

  rateHover = (rate: number) => {
    this.rateHovered = rate
  }

  rateClick = (rate: number) => {
    this.apiService.rateMovies(rate, this.movie.id).subscribe(
      result => this.getDetails(),
      error => console.log(error)
    );
  }

  getDetails = () => {
    this.apiService.getMovie(this.movie.id).subscribe(
      (movie: Movie) => {
        this.updateMovie.emit(movie);
      },
      error => console.log(error)
    );
  }

}
