import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleLoader } from 'src/app/store/actions/loader.actions';
import { selectAgentInfo, selectRecords } from 'src/app/store/selectors/properties.selector';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  listID: any;
  token: any;
  agentInfo$ = this.store.select(selectAgentInfo);
  records$ = this.store.select(selectRecords);

  constructor(
    private readonly store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.listID = this.route.snapshot.params['listID'];
    this.token = this.route.snapshot.params['token'];
  }

  routeToSingleProperty(propertyId: number) {
    this.store.dispatch(toggleLoader({newState: true}));
    this.router.navigate([this.listID, this.token, propertyId]);
  }

  

}
