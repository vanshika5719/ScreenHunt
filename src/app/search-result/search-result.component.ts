import { Component, OnInit} from '@angular/core';
import { ScreenhuntService } from '../services/screenhunt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { movie } from '../search-page/movie.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movieDetail!: movie;
  Isloading: boolean;
  id: number = 0;

  constructor(private screenhuntService: ScreenhuntService,
    private sharedService: SharedService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.Isloading=true;
    }

  ngOnInit(): void {
    this.sharedService.currentId.subscribe(id => this.id = id);
      console.log('this is from constructor'+ this.id);
    if(this.id == -1){
      this.id=Number(localStorage.getItem('movieId'));
    }
    else{
      localStorage.setItem('movieId',this.id.toString());
    }
    this.retrieveMovieDetails(this.id);
  }

  retrieveMovieDetails(id:any):void {
    this.Isloading=true;
    this.screenhuntService.get(id)
  .subscribe(
    data => {
      console.log('Data returned by the service:', data);
      this.movieDetail = data;
      this.Isloading = false;
    },
    error => {
      console.log(error);
    });
  }
}



