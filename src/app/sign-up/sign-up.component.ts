import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() {}
  errmsg:any;
  errmsgshow: boolean = false;

  signupForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    emailid: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required),
    subscriptions: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])
  });



  ngOnInit(): void {
  }

  signupSubmit()
  {  
    if(this.signupForm.valid)
    {
      console.log(this.signupForm.value, 'signuform###');
      this.errmsgshow = false;
    }
    else
    {
      this.errmsgshow = true;
      this.errmsg = "All Fields Required";
    }
      
    }
}