import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PropertyDetail } from 'src/app/core/interface';
import { ListingsService } from 'src/app/core/list-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  propertyId: number;
  listID: any;
  token: any;
  property$: Observable<PropertyDetail>;

  constructor(
    private route: ActivatedRoute,
    private listingSerivce: ListingsService,
  ) { }

  ngOnInit(): void {
    this.listID = this.route.parent?.snapshot.params['listID'];
    this.token = this.route.parent?.snapshot.params['token'];
    this.propertyId = this.route.snapshot.params['propertyId'];
    this.getSelectedProperty(this.propertyId);
  }

  getSelectedProperty(id: number) {
    this.property$ = this.listingSerivce.fetchProperty(this.listID, this.token, id);
  }

}
