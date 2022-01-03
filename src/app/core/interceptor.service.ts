import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { toggleLoader } from '../store/actions/loader.actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private readonly store: Store,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.store.dispatch(toggleLoader({newState: false}));
        }
        return event;
      }),
    );
  }
}