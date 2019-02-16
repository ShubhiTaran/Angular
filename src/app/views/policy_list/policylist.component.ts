import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../../policy.service';
import { ClaimComponent } from '../claim/claim.component';
// import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector:'app-policy',
  templateUrl: 'policylist.component.html'
})

export class PolicylistComponent implements OnInit {
  policyDetails :any=[];

  
constructor(private route :ActivatedRoute,private router : Router,private policyDetail:PolicyService ){}
  ngOnInit(){
     
    this.policyDetail.listOfPolicy() .subscribe(data => {
    //  console.log(data);
      this.policyDetails= this.policyDetails.concat(data);
    });
 
  }
  claim(policy_no){

console.log(policy_no);
    this.policyDetail.getPolicyById(policy_no).subscribe(data => {
      console.log(data);
    this.router.navigate([ '../claim'], { relativeTo: this.route })
})
 }

 
  
}
