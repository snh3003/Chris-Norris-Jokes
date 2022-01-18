import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  private uri: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) {
    this.getJoke();
    console.log('ApiConfigService constructor');
  }

  getJoke = () => {
    return this.httpClient.get(this.uri);
  };
}
