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
  Isloading: boolean;

  constructor(private screenhuntService: ScreenhuntService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.Isloading=true;
    }

  ngOnInit(): void {
    this.retrieveMovieDetails('1');
  }


  retrieveMovieDetails(id:any):void {
    this.Isloading=true;
    this.screenhuntService.get(id)
      .subscribe(
        data => {
          this.movieDetail = data;
          console.log(data);
          this.Isloading=false;
        },
        error => {
          console.log(error);

        });
  }
}



