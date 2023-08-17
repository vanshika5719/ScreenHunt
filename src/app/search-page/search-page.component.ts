import { Component,OnInit } from '@angular/core';
import { ScreenhuntService } from '../services/screenhunt.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  allMovies: any;
  
  constructor(private screenhuntService: ScreenhuntService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { this.retrieveAllMovies();
   }
   retrieveAllMovies():void {
    // this.Isloading=true;
    this.screenhuntService.getAll()
      .subscribe(
        data => {
          this.allMovies = data;
          console.log(data);
          // this.Isloading=false;
        },
        error => {
          console.log(error);

        });
  }

  toSection3(){
    let x= document.querySelector("#section3");
    if(x){
      x.scrollIntoView({
        behavior:'smooth',
      }
      )
    }
  }

  toSection2(){
    let x= document.querySelector("#section2");
    if(x){
      x.scrollIntoView({
        behavior:'smooth',
      }
      )
    }
  }

  toSection1(){
    let x= document.querySelector("#section1");
    if(x){
      x.scrollIntoView({
        behavior:'smooth',
      }
      )
    }
  }


toSection6(){
  let x= document.querySelector("#section6");
  if(x){
    x.scrollIntoView({
      behavior:'smooth',
    }
    )
  }
}

toSection5(){
  let x= document.querySelector("#section5");
  if(x){
    x.scrollIntoView({
      behavior:'smooth',
    }
    )
  }
}

toSection4(){
  let x= document.querySelector("#section4");
  if(x){
    x.scrollIntoView({
      behavior:'smooth',
    }
    )
  }
}

}