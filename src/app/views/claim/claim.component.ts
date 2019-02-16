import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PolicyService } from '../../policy.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector:'app-claim',
  templateUrl: 'claim.component.html'
})
export class ClaimComponent implements OnInit {
  claimform: FormGroup;
  submitted = false;
  
  

 
constructor(private formBuilder: FormBuilder,private policyDetail:PolicyService,private router:Router,private route:ActivatedRoute){}
@Input() detail:String

  ngOnInit(){
    this.claimform = this.formBuilder.group({
      holder_name: [this.detail, Validators.required],
      
      policy_no: ['', Validators.required],
      address:['',Validators.required],
     
      number: ['', [Validators.required, Validators.minLength(10)]],
      email:['',Validators.required],
      occupation:['',Validators.required],
      date:['',Validators.required],
      place:['',Validators.required],
      description:['',Validators.required],
      claim_no:[Math.floor(100+ Math.random() * 900)]
  });
  }
  get f() { return this.claimform.controls; }
  onSubmit(){
    this.submitted=true
    if(this.claimform.invalid){
      return
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.claimform.value))

    this.policyDetail.addclaim(this.claimform.value).subscribe(data=>{
      console.log("====================>",this.claimform.value)
      this.router.navigate([ '../claim_list'], { relativeTo: this.route })
    })
}

// handlepolicy(policy3 : Number){
//   this.policy_no1.emit();
// }
//this.policy_no1.emit(policy_no);

  }

  

