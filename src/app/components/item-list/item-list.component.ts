import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleLoader } from 'src/app/store/actions/loader.actions';
import { selectAgentInfo, selectRecords } from 'src/app/store/selectors/properties.selector';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent  {

  agentInfo$ = this.store.select(selectAgentInfo);
  records$ = this.store.select(selectRecords);

  constructor(
    private readonly store: Store,
    private router: Router
  ) { }

  routeToSingleProperty(propertyId: number) {
    this.store.dispatch(toggleLoader({newState: true}));
    this.router.navigate([propertyId]);
  }

  

}
