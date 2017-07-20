import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/delay';

@Injectable()
export class ConfigService {

  config$;

  constructor(http: Http) { 
    this.config$ = http.get('assets/config.json')
      .map(res => Object.assign({}, res.json(), {
        'loaded': true
      }))
      .startWith({
        loaded: false
      });
  }

}
