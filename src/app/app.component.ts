import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import * as mapboxglType from 'mapbox-gl';
import { MapboxOptions, Map } from 'mapbox-gl';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ListResponse, Record } from './core/interface';
import { ListingsService } from './list-service.service';

declare var mapboxgl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('map') MapContainer!: ElementRef<HTMLElement>;

  map: Map | undefined;
  list$: Observable<ListResponse>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private listingSerivce: ListingsService
  ) { }

  ngOnInit(): void {
    this.processMapData();
  }

  processMapData() {
    let totalLongitude: number = 0;
    let totalLatitude: number = 0;
    this.list$ = this.listingSerivce.fetchMapPinItems(5363950, '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E');
    this.list$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        for (const record of res.records) {
          totalLatitude += Number(record.geocode.Latitude);
          totalLongitude += Number(record.geocode.Longitude);
          new mapboxgl.Marker()
            .setLngLat([record.geocode.Longitude, record.geocode.Latitude])
            .addTo(this.map);
        }

        const averageLong = totalLongitude / res.records.length;
        const averageLat = totalLatitude / res.records.length;
        this.map?.setCenter([averageLong, averageLat]);
        this.map?.setZoom(13);
      })
  }


  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.MapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ',
      center: [12, 0],
      zoom: 3,

    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
