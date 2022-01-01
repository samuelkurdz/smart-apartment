import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
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
  ) { }

  

}
