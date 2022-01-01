import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListingsService } from './core/list-service.service';
import { setProperties } from './store/actions/properties.actions';
// import * as mapboxglType from 'mapbox-gl';

declare var mapboxgl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private listingSerivce: ListingsService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.listingSerivce.fetchMapPinItems(5638557, 'A0E2523B25B805CBB6F8EC9D98AF56457EE7A255').subscribe(res => {
      this.store.dispatch(setProperties({ response: res}));
    })
  }

}
