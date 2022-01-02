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

  url = 'https://app.smartapartmentdata.com/List/json/listItems.aspx';
  updateUrl = 'https://app.smartapartmentdata.com/List/json/updateListItem.aspx';
  propertyItemUrl = 'https://app.smartapartmentdata.com/List/json/propertyItem.aspx?listID=5638557&token=A0E2523B25B805CBB6F8EC9D98AF56457EE7A255&propertyID=70284'


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

  updateItem(payload: UpdateItemData) {
    return this.httpClient.post<UpdateResponse>(
      environment.baseUrl + environment.updateListItemEndpoint, payload
    );
  }
}


