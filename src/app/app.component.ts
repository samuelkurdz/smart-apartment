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

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.MapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ',
      center: [12, 0],
      zoom: 3,
    });
  }

  processMapData() {
    let totalLongitude: number = 0;
    let totalLatitude: number = 0;
    this.list$ = this.listingSerivce.fetchMapPinItems(5363950, '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E');
    this.list$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {

        for (const [index, record] of res.records.entries()) {
          totalLatitude += Number(record.geocode.Latitude);
          totalLongitude += Number(record.geocode.Longitude);

          const el = document.createElement('div');
          const width = 36;
          const height = 36;
          el.classList.add('marker');
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.color = 'blueviolet';

          this.createRecordKey(el, index);
          this.createLocationIcon(el);


          new mapboxgl.Marker(el)
            .setLngLat([record.geocode.Longitude, record.geocode.Latitude])
            .addTo(this.map);
        }

        const averageLong = totalLongitude / res.records.length;
        const averageLat = totalLatitude / res.records.length;
        this.map?.setCenter([averageLong, averageLat]);
        this.map?.setZoom(13);
      })
  }

  createRecordKey(node: Node, index: number) {
    const span = document.createElement('span');
    span.textContent = String(index + 1);
    span.style.width = `20px`;
    span.style.height = `20px`;
    span.style.color = 'white';
    span.style.background = 'green';
    span.style.padding = '10px';
    span.style.borderRadius = '100%';
    node.appendChild(span);
  }

  createLocationIcon(node: Node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );

    iconSvg.setAttribute('fill', 'currentColor');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.setAttribute('stroke', 'black');
    // iconSvg.classList.add('post-icon');

    iconPath.setAttribute(
      'd',
      'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
    );
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-linejoin', 'round');
    iconPath.setAttribute('stroke-width', '1');
    iconPath.setAttribute('fill-rule', 'evenodd');

    iconSvg.appendChild(iconPath);

    node.appendChild(iconSvg);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
