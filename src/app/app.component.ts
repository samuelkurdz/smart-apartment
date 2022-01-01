import { Component, OnInit } from '@angular/core';
// import * as mapboxglType from 'mapbox-gl';

declare var mapboxgl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

}
