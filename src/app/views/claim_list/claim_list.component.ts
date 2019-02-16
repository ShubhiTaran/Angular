import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../../policy.service';


@Component({
  templateUrl: 'claim_list.component.html'
})
export class Claim_listComponent implements OnInit {
  claimDetails :any=[];
 
constructor(private route :ActivatedRoute,private router : Router,private policyDetail:PolicyService){}
  ngOnInit(){
    this.policyDetail.listOfclaim() .subscribe(data => {
      //  console.log(data);
        this.claimDetails= this.claimDetails.concat(data);
      });
 
  }
  onSubmit(){
    alert("List send Successfully to claim Adjuster")
  }
  
}
