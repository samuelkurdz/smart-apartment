import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import * as mapboxgl from 'mapbox-gl';
import { Map, Marker } from 'mapbox-gl';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Record } from 'src/app/core/interface';
import { NodeCreatorService } from 'src/app/core/node-creator.service';
import { toggleLoader } from 'src/app/store/actions/loader.actions';
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
  markers: Marker[] = [];
  records$ = this.store.select(selectRecords);
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private readonly store: Store,
    private nodeCreator: NodeCreatorService,
  ) { }

  ngOnInit(): void {
    /* this subscription will fire always when the url changes */
    this.router.events.subscribe(val=> {
      if (val instanceof NavigationStart) {
        // let curUrlTree = this.router.parseUrl(this.router.url);
        // console.log(val.url);
        this.processRouteInformation(val.url);
      }
    });
  }

  processRouteInformation(routeParam: string) {
    const paramsArray = routeParam.split('/').filter(element => element);
    paramsArray.length ? this.processMapData(paramsArray[0]) : this.processMapData();
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.MapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ',
      center: [12, 0],
      zoom: 3,
    });
  }

  removeMarkersFromMap() {
    if (this.markers.length > 0) {
      for (const marker of this.markers) {
        marker.remove();
      };
      this.markers = [];
    }
  }

  processMapData(propertyid?: string) {
    this.records$
    .pipe(takeUntil(this.destroy$))
    .subscribe((records) => {
        if (propertyid) {
          this.displaySinglePropertyOnMap(records, propertyid);
        } else {
          this.displayPropertiesOntoMap(records);
        }
      })
  }

  displaySinglePropertyOnMap(records: Record[], propertyID: string) {
    const property = records.find(record => record.propertyID === Number(propertyID));

    if (property) {
      this.removeMarkersFromMap();
      const el = document.createElement('div');
      el.classList.add('marker');
      el.style.width = `36px`;
      el.style.color = 'blueviolet';
  
      el.style.display = 'flex';
      el.style.flexDirection = 'column';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
  
      this.nodeCreator.createLocationIcon(el);
  

      const marker = new mapboxgl.Marker(el)
        .setLngLat([property.geocode.Longitude, property.geocode.Latitude])
        .addTo(this.map)
      this.markers.push(marker);
      this.map?.setCenter([+property.geocode.Longitude, +property.geocode.Latitude]);
      this.map?.setZoom(16);
    }
  }

  displayPropertiesOntoMap(records: Record[]) {
    this.removeMarkersFromMap();
    let totalLongitude: number = 0;
    let totalLatitude: number = 0;
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


      this.nodeCreator.createRecordKey(el, index);
      this.nodeCreator.createLocationIcon(el);


      const marker = new mapboxgl.Marker(el)
        .setLngLat([record.geocode.Longitude, record.geocode.Latitude])
        .addTo(this.map);
      this.markers.push(marker);
    }

    const averageLong = totalLongitude / records.length;
    const averageLat = totalLatitude / records.length;

    if (records.length !== 0) {
      this.map?.setCenter([averageLong, averageLat]);
      this.map?.setZoom(13);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
