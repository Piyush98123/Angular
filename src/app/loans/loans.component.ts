import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
    constructor(private activatedRoute: ActivatedRoute){
      this.activatedRoute.params.subscribe(params =>{
        console.log(params);
        
      })
    }
}
