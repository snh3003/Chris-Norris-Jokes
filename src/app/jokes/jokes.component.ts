import { Component, Input, OnInit } from '@angular/core';

import { faClock, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  iconURL: string;
  joke: string;
  date: string;

  faClock = faClock;
  faComments = faComments;

  @Input() jokesRes: any;
  constructor() {
    console.log('JokesComponent constructor');
    //console.log(">>>",this.jokesRes);
  }

  ngOnInit(): void {
    this.iconURL = this.jokesRes.icon_url;
    this.joke = this.jokesRes.value;
    this.date = this.jokesRes.updated_at;
    console.log(this.jokesRes);
  }
}
