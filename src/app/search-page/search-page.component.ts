import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  ngOnInit(): void {
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