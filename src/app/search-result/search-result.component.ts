import { Component, OnInit } from '@angular/core';
import { ScreenhuntService } from '../services/screenhunt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  movieDetail: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  constructor(private screenhuntService: ScreenhuntService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.retrieveMovieDetails('1');
  }


  retrieveMovieDetails(id:any):void {
    this.screenhuntService.get(id)
      .subscribe(
        data => {
          this.movieDetail = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
