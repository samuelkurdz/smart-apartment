import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CompanyInfo } from 'src/app/core/interface';
import { toggleLoader } from 'src/app/store/actions/loader.actions';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  companyInfo: CompanyInfo = {
    listID: undefined,
    token: undefined
  };

  constructor(
    private readonly store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(toggleLoader({newState: false}));
  }

  onSubmit() {
    const { listID, token } = this.companyInfo;
    if (!listID || !token) {
      return;
    }
    this.store.dispatch(toggleLoader({newState: true}));
    this.router.navigate([listID, token]);
  }

}
