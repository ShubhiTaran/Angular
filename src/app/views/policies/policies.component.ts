import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PolicyService } from '../../policy.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  templateUrl: 'policies.component.html'
})
export class PoliciesComponent implements OnInit {
  policyForm: FormGroup;
  submitted = false;
  
constructor(private formBuilder: FormBuilder, private policyDetail:PolicyService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.policyForm = this.formBuilder.group({
      
      
      policy_name: ['', Validators.required],
      date_of_policy_taken:['',Validators.required],
      expiry_date:['',Validators.required],
      number: ['', [Validators.required, Validators.minLength(10)]],
      
      policy_amt:['',Validators.required],
      claim_amt:['',Validators.required],
      policy_no:[Math.floor(100+ Math.random() * 900)]
  });
  }
  get f() { return this.policyForm.controls; }
  onSubmit(){
     this.submitted=true
    if(this.policyForm.invalid){
      return
    }
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.policyForm.value))

    this.policyDetail.policyService(this.policyForm.value).subscribe(data=>{
      console.log("====================>",this.policyForm.value)
      this.router.navigate(['policy_list'])
    })
}

  
}
