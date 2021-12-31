import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay  } from "rxjs/operators";
import { ListResponse, UpdateItemData, UpdateResponse } from './core/interface';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  url = 'https://app.smartapartmentdata.com/List/json/listItems.aspx';
  updateUrl = 'https://app.smartapartmentdata.com/List/json/updateListItem.aspx';


  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchMapPinItems(listID: number, token: string, receipt?: any): Observable<ListResponse> {
    let params = new HttpParams();
    params = params.append('listID', listID);
    params = params.append('token', token);
    params = params.append('receipt', receipt);

    return this.httpClient.get<ListResponse>(
      this.url, {params}
      ).pipe(
        shareReplay()
      )
  }

  updateItem(payload: UpdateItemData) {
    return this.httpClient.post<UpdateResponse>(this.updateUrl, payload);
  }
}


