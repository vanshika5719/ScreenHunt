import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {


  constructor(private service: AuthService, private router: Router) {}
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
          localStorage.setItem('firstname',res.result.fname);
          localStorage.setItem('lastname',res.result.lname);
          localStorage.setItem('email',res.result.emailid);
          localStorage.setItem('pass',res.result.pass);
          this.router.navigate(['/search-page']).then(()=>{
          window.location.reload();
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
      this.errmsg = 'All field required !!';
    }
  }
}
