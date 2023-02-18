import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private fb:FormBuilder){
      this.activatedRoute.params.subscribe(params =>{
        console.log(params);
        
      })
    }
    addLoanForm!: FormGroup;
  ngOnInit(): void {
    // this.addLoanForm = new FormGroup({
      
    //   'loanName':new FormControl(),
    //   'loanDesc':new FormControl(),
    //   'loanType': new FormControl()
    // })

    this.addLoanForm = this.fb.group({
        
      'loanName':new FormControl('Home Loan'),
      'loanDesc':new FormControl('Home Loan to buy house'),
      'loanType': new FormControl('Home loanss')
    });
  }
  addLoad(){
    console.log(this.addLoanForm.value);
    console.log(this.addLoanForm.get('loanType')?.value);
  }
}
