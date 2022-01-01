import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PropertyDetail } from 'src/app/core/interface';
import { ListingsService } from 'src/app/core/list-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {
  @ViewChild('map') MapContainer!: ElementRef<HTMLElement>;
  propertyId: number;
  property$: Observable<PropertyDetail>;

  constructor(
    private route: ActivatedRoute,
    private listingSerivce: ListingsService,
  ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['propertyId'];
    this.getSelectedProperty(this.propertyId);
  }

  getSelectedProperty(id: number) {
    this.property$ = this.listingSerivce.fetchProperty(5363950, '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E', id);
  }

  ngAfterViewInit(): void {
    console.log(this.MapContainer);
  }
}
