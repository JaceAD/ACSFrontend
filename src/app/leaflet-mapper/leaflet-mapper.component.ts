import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryResponse } from '../query-response';
import { QueryDataSourceService } from '../query-data-source.service';
import { isNgTemplate } from '@angular/compiler';
import { GeneralQueryResponse } from '../general-query-response';

@Component({
  selector: 'app-leaflet-mapper',
  templateUrl: './leaflet-mapper.component.html',
  styleUrls: ['./leaflet-mapper.component.css']
})

export class LeafletMapperComponent implements OnInit {

  //private dataset: QueryResponse[];
  private dataset: GeneralQueryResponse[];

  constructor(private dataSource: QueryDataSourceService) {
    this.dataSource.retrieveQuery().subscribe(dataset => { this.dataset = dataset });
    this.printData();
  }

  ngOnInit() {
  }

  printData() {
    /*
    this.dataset.forEach((entry) => {
      console.log("data");
      entry.data.forEach((field) => {
        console.log(field);
      })

    })*/
    console.log(this.dataset);
  }

  printError(e) {
    console.log(e);
  }
}
