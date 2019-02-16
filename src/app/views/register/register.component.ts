import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyService } from '../../policy.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router,private policyDetail:PolicyService) { }
@Input() detail:PolicyService
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        licenseno: ['', Validators.required],
        name: ['', Validators.required],
        address:['',Validators.required],
        number: ['', [Validators.required, Validators.minLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        cpassword: ['', Validators.required],
         
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      this.policyDetail.register(this.registerForm.value).subscribe(data=>{
        console.log("====================>",this.registerForm.value)
      this.router.navigate(['login'])
      }) 
  }

}
