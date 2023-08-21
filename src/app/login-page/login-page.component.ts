import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import {SharedService} from './../services/shared.service';
import {subscriptions} from './subscriptions.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  subs:subscriptions ={
    fname:'noUserLogged',
    lname:'noUserLogged',
    interest:'Drama',
    Disney: '0',
    HBO: '0',
    Netflix: '0',
    Prime: '0',
  }

  constructor(private service: AuthService, private router: Router,private sharedService: SharedService) {}
  errmsg:any;
  errmsgshow=false;
  loginForm = new FormGroup({
    emailid:new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required)
  });

  ngOnInit(): void{
  }

  loginSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value,'loginvalue##');
      this.service.login(this.loginForm.value).subscribe((res)=>{
        if(res.status==true)
        {
          console.log(res,'resss');
          // store data in localStorage
           localStorage.clear();
           localStorage.setItem('fname',res.result[0].fname);
           localStorage.setItem('lname',res.result[0].lname);
           localStorage.setItem('interest',res.result[0].interest);
           localStorage.setItem('Disney',res.result[0].Disney);
           localStorage.setItem('Netflix',res.result[0].Netflix);
           localStorage.setItem('HBO',res.result[0].HBO);
           localStorage.setItem('Prime',res.result[0].Prime);

          this.subs.fname = res.result[0].fname;
          this.subs.lname = res.result[0].lname;
          this.subs.interest = res.result[0].interest;
          this.subs.Disney = res.result[0].Disney;
          this.subs.Netflix =res.result[0].Netflix;
          this.subs.HBO =res.result[0].HBO;
          this.subs.Prime =res.result[0].Prime;
          this.sharedService.changeSubscription(this.subs);
          this.router.navigate(['/search-page']).then(()=>{
          //window.location.reload();
          });
        }
        else
        {
            this.errmsgshow=true;
            this.errmsg = res.msg;
        }
      });
      
    }else
    {
      this.errmsgshow=true;
      this.errmsg = 'All field required.';
    }
  }
}
