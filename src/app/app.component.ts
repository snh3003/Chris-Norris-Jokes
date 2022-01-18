import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './services/api-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Chris Norris Jokes';

  constructor(private apiConfigService: ApiConfigService) {

  }
  
  
  jokesRes: any;
  
  counter: number = 5;
  timer: ReturnType<typeof setTimeout> = setTimeout(() => {
    this.count;
  }, 5000);

  count = () => {
    this.counter--;
    if (this.counter > 0) {
      alert(this.counter);
      this.newJoke();
    } else {
      this.counter = 5;
      this.newJoke();
    }
  };

  newJoke() {
    this.jokesRes = null;
    this.showJoke();
  }

  showJoke = () => {
    this.apiConfigService.getJoke().subscribe(
      (res: any) => {
        //console.log(res);
        this.jokesRes = res;
        console.log(this.jokesRes.value);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  ngOnInit(): void {
    this.showJoke();
  }
}
