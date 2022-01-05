import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ListingsService } from 'src/app/core/list-service.service';
import { setProperties } from 'src/app/store/actions/properties.actions';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(
    private readonly store: Store,
    private route: ActivatedRoute,
    private listingSerivce: ListingsService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const { listID, token } = this.route.snapshot.params;
    this.listingSerivce.fetchMapPinItems(listID, token).subscribe(res => {
      this.store.dispatch(setProperties({ response: res}));
      this.title.setTitle(res.agentInfo?.company ?? 'Smart Apartments');
    })
  }

}
