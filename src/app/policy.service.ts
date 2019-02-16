import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from  "@angular/common/http";

import { HttpHeaders } from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http:HttpClient) { }

policyService(policy){
    return this.http.post('http://127.0.0.1:4003/policies',policy)
 }

 listOfPolicy(){
  return this.http.get(`http://127.0.0.1:4003/getListOfPolicies`)
 }

 listOfclaim(){
  return this.http.get(`http://127.0.0.1:4003/getListOfclaim`)
 }

 addclaim(claim){
  return this.http.post('http://127.0.0.1:4003/addclaim',claim)
 }

 getPolicyById(policy_no: Number){
   console.log("get policy number",policy_no);
   
 return this.http.post("http://127.0.0.1:4003/getPolicy_no",
   {
    'policy_no': policy_no 
   })
  }

 register(data){
  return this.http.post('http://127.0.0.1:4003/register',data)
}

logout() {
  localStorage.setItem('isLoggedIn', "false");
  localStorage.removeItem('token');
} 


}
