import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ToggleLightService {

  private url = 'http://169.254.172.150:8888/';

  constructor(
    private http : Http
  ) {}

  handleError(error : any) : Promise<any> {
    console.error('Error: ' + error);
    return Promise.reject(error.message || error)
  }

  toggleLight(state) : Promise<void> {
    /*
    return this.http
      .post(this.url, JSON.stringify({state : state}))
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
    */

    if (state == 'on') {
      return this.http
        .get(this.url + "switchlighton")
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    } else if (state == 'off') {
      return this.http
        .get(this.url + "switchlightoff")
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
  }
}
