import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryResponse } from './query-response';
import { GeneralQueryResponse } from './general-query-response';

const options = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QueryDataSourceService {

  private url: string = "http://localhost:9600/location/countySubdivision:*,state:55/year/2018/variables/NAME,B10057_004E";


  constructor(private http: HttpClient) {

  }

  retrieveQuery(): Observable<GeneralQueryResponse[]> {

    //return this.http.get<QueryResponse[]>(this.url, options);
    return this.http.get<GeneralQueryResponse[]>(this.url, options);
  }

}
