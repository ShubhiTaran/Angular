import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls:['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.profileForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          
          email: ['', [Validators.required, Validators.email]],
          dob:['',Validators.required],
          number: ['', [Validators.required, Validators.minLength(10)]],
          gender:['',Validators.required],
          address_of_owner:['',Validators.required],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.profileForm.value))
  }
}
