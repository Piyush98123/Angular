import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  constructor(){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  firstname:String ='';
  terms:boolean=false;
  description:string='';
  checkLogin(formValue:NgForm){
    console.log(formValue.value);
  }

  setValue(loginForm: NgForm){
    let userDetail = {
      firstname :'ABC',
      terms : true,
      description : "Hello worlfd"
    }
    loginForm.setValue(userDetail);
  }
}
