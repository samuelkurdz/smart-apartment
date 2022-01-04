/* eslint-disable ngrx/avoid-dispatching-multiple-actions-sequentially */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListingsService } from './core/list-service.service';
import { toggleLoader } from './store/actions/loader.actions';
import { setProperties } from './store/actions/properties.actions';
import { selectLoaderState } from './store/selectors/loader.selector';
// import * as mapboxglType from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading$ = this.store.select(selectLoaderState);
  constructor(
    private readonly store: Store,
    private listingSerivce: ListingsService,
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(toggleLoader({newState: true}));
  }

}
