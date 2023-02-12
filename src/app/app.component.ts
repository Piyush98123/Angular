import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Text';
  success_msg = true;
  name = "piyush";
  date =Date.now();
  currency = 123;
  perc= 0.978;
  contact=[
    {
      'firstName':'Piyush',
      'lastName':'Solanki',
      'contact':1234
    },
    {'firstName':'ABC',
    'lastName':'DEF',
    'contact':567},
    {'firstName':'IJK',
    'lastName':'LMN',
    'contact':890}
  ]
}
