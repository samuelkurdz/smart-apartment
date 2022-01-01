import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
// import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ListResponse } from 'src/app/core/interface';
import { selectRecords } from 'src/app/store/selectors/properties.selector';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map') MapContainer!: ElementRef<HTMLElement>;

  map: Map | undefined;
  list$: Observable<ListResponse>;
  records$ = this.store.select(selectRecords);
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly store: Store,
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
    this.records$
      .pipe(takeUntil(this.destroy$))
      .subscribe((records) => {
        for (const [index, record] of records?.entries()) {
          totalLatitude += Number(record.geocode.Latitude);
          totalLongitude += Number(record.geocode.Longitude);

          const el = document.createElement('div');
          el.classList.add('marker');
          el.style.width = `36px`;
          el.style.color = 'blueviolet';

          el.style.display = 'flex';
          el.style.flexDirection = 'column';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';


          this.createRecordKey(el, index);
          this.createLocationIcon(el);


          new mapboxgl.Marker(el)
            .setLngLat([record.geocode.Longitude, record.geocode.Latitude])
            .addTo(this.map);
        }

        const averageLong = totalLongitude / records.length;
        const averageLat = totalLatitude / records.length;
        this.map?.setCenter([averageLong, averageLat]);
        this.map?.setZoom(13);
      })
  }

  createRecordKey(node: Node, index: number) {
    const span = document.createElement('span');
    span.textContent = String(index + 1);
    span.style.width = `16px`;
    span.style.height = `16px`;
    span.style.color = 'white';
    span.style.border = '#831843 solid 1px';
    span.style.background = '#ec4899';
    span.style.padding = '8px';
    span.style.borderRadius = '100%';
    span.style.display = 'flex';
    span.style.flexDirection = 'column';
    span.style.alignItems = 'center';
    span.style.justifyContent = 'center';
    node.appendChild(span);
  }

  createLocationIcon(node: Node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );

    iconSvg.setAttribute('fill', 'currentColor');
    iconSvg.setAttribute('viewBox', '0 0 20 20');
    iconSvg.setAttribute('stroke', 'black');

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
