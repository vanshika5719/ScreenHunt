import { Component, OnInit } from '@angular/core';
import { ScreenhuntService } from '../services/screenhunt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from './movie.interface';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  allMovies: movie[]=[];
  recommendedMovies: movie[]=[];
  trendingMovies: movie[]=[];

  constructor(private screenhuntService: ScreenhuntService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveAllMovies();

  }
  retrieveAllMovies(): void {
    this.screenhuntService.getAll()
      .subscribe(
        data => {
          this.allMovies = data;
          console.log('All Movies:', this.allMovies);
          // this.recommendedMovies = [];
          // this.trendingMovies = [];
          this.allMovies.forEach((movie) => {
            // console.log('Movie:', movie);
            if (movie.Genre == 'Drama') {
              this.recommendedMovies.push(movie);
            }
            if (movie.IsTrending == '1') {
              this.trendingMovies.push(movie);
            }
          });
          console.log('Recommended Movies:', this.recommendedMovies);
          console.log('Trending Movies:', this.trendingMovies);
        },
        error => {
          console.log(error);
        });
  }

  sendId() {
    this.sharedService.changeId(7);
  }

  // someFunction() {
  //   console.log('Button clicked!');
  // }

  toSection3() {
    let x = document.querySelector("#section3");
    if (x) {
      x.scrollIntoView({
        behavior: 'smooth',
      }
      )
    }
  }

  toSection2() {
    let x = document.querySelector("#section2");
    if (x) {
      x.scrollIntoView({
        behavior: 'smooth',
      }
      )
    }
  }

  toSection1() {
    let x = document.querySelector("#section1");
    if (x) {
      x.scrollIntoView({
        behavior: 'smooth',
      }
      )
    }
  }


  toSection6() {
    let x = document.querySelector("#section6");
    if (x) {
      x.scrollIntoView({
        behavior: 'smooth',
      }
      )
    }
  }

  toSection5() {
    let x = document.querySelector("#section5");
    if (x) {
      x.scrollIntoView({
        behavior: 'smooth',
      }
      )
    }
  }

  toSection4() {
    let x = document.querySelector("#section4");
    if (x) {
      x.scrollIntoView({
        behavior: 'smooth',
      }
      )
    }
  }



}