import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) {}
  errmsg:any;
  errmsgshow: boolean = false;

  signupForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    emailid: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required),
    subscriptions: new FormArray([
      new FormControl(0),
      new FormControl(0),
      new FormControl(0),
      new FormControl(0)
    ])
  });



  ngOnInit(): void {
  }

  signupSubmit()
  {  
    if (this.signupForm.valid) {
      console.log(this.signupForm.value, 'signuform###');
      this.errmsgshow = false;
      let dataObj = 
        {
            fname: this.signupForm.value.fname,
            lname: this.signupForm.value.lname,
            emailid: this.signupForm.value.emailid,
            pass: this.signupForm.value.pass,
            interest: this.signupForm.value.interest,
            Netflix: this.signupForm.value.subscriptions?.[0] ? 1 : 0,
    HBO: this.signupForm.value.subscriptions?.[1] ? 1 : 0,
    Amazon: this.signupForm.value.subscriptions?.[2] ? 1 : 0,
    Disney: this.signupForm.value.subscriptions?.[3] ? 1 : 0
        }


      // callapi signup
      this.service.signup(dataObj).subscribe((res) => {
        console.log(res, 'res##');
        if (res.status == true) {
          this.router.navigate(['/login']);
        } else {
          this.errmsgshow = true;
          this.errmsg = res.msg;
        }
      });
    } else {
      this.errmsgshow = true;
      this.errmsg = 'All field required.';
    }
      
    }
}