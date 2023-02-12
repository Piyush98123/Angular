import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leads-listing',
  templateUrl: './leads-listing.component.html',
  styleUrls: ['./leads-listing.component.css']
})
export class LeadsListingComponent {
  constructor(private activatedRoute: ActivatedRoute){
    
  }
  ngOnInit():void{
    console.log(this.activatedRoute.snapshot.data);
  }
}
