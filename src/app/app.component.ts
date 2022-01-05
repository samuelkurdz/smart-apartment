import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoaderState } from './store/selectors/loader.selector';
// import * as mapboxglType from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading$ = this.store.select(selectLoaderState);
  constructor(
    private readonly store: Store,
  ) { }

}
