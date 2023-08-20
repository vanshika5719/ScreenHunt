import { Component, OnInit} from '@angular/core';
import { ScreenhuntService } from '../services/screenhunt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { movie } from '../search-page/movie.interface';
import { subscriptions} from './../login-page/subscriptions.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movieDetail!: movie;
  Isloading: boolean;
  id: number = 0;
  subs:subscriptions;

  constructor(private screenhuntService: ScreenhuntService,
    private sharedService: SharedService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.subs = {
        fname:'noUserLogged',
        lname:'noUserLogged',
        interest:'Drama',
        Disney: '0',
        HBO: '0',
        Netflix: '0',
        Prime: '0',
      }
      this.Isloading=true;
    }

  ngOnInit(): void {
    
    this.sharedService.getSubs().subscribe(subs => this.subs = subs);
    console.log('this subs from search result' + this.subs.fname?.toString());
    if(this.subs.fname === 'noUserLogged' && localStorage.getItem('fname') == null){
      this.router.navigate(['/login'])
    }
    else if(this.subs.fname === 'noUserLogged' && localStorage.getItem('fname') != null){
      this.subs.fname = localStorage.getItem('fname')?.toString();
      this.subs.lname = localStorage.getItem('lname')?.toString();
      this.subs.interest = localStorage.getItem('interest')?.toString();
      this.subs.Netflix = localStorage.getItem('Netflix')?.toString();
      this.subs.HBO = localStorage.getItem('HBO')?.toString();
      this.subs.Prime = localStorage.getItem('Prime')?.toString();
      this.subs.Disney = localStorage.getItem('Disney')?.toString();

    }
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



