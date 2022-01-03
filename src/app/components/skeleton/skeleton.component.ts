import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {

  // // paramsArray: string[] = [];
  // constructor(
  //   private router: Router
  // ) { }

  // ngOnInit(): void {
  //   this.router.events.subscribe(val=> {
  //     if (val instanceof NavigationEnd) {
  //       this.paramsArray = val.url.split('/').filter(element => element);
  //     }
  //   });
  // }

}
