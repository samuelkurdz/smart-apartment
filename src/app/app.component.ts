import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListingsService } from './core/list-service.service';
import { setProperties } from './store/actions/properties.actions';
// import * as mapboxglType from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private listingSerivce: ListingsService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.listingSerivce.fetchMapPinItems(5363950, '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E').subscribe(res => {
      this.store.dispatch(setProperties({ response: res}));
    })
  }

}
