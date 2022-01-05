import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertiesList, PropertyDetail, UpdateItemData, UpdateResponse } from './interface';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchMapPinItems(listID: number, token: string, receipt?: any): Observable<PropertiesList> {
    let params = new HttpParams();
    params = params.append('listID', listID);
    params = params.append('token', token);
    params = params.append('receipt', receipt);

    return this.httpClient.get<PropertiesList>(
      environment.baseUrl + environment.listItemsEndpoint,
      { params }
    );
  }

  fetchProperty(listID: number, token: string, propertyID: number) {
    let params = new HttpParams();
    params = params.append('listID', listID);
    params = params.append('token', token);
    params = params.append('propertyID', propertyID);

    return this.httpClient.get<PropertyDetail>(
      environment.baseUrl + environment.propertyItemEndpoint,
      { params }
    ).pipe(shareReplay());
  }

  updateItemFavoriteStatus(payload: UpdateItemData) {
    return this.httpClient.post(
      environment.baseUrl + environment.updateListItemEndpoint, payload
    );
  }
}


