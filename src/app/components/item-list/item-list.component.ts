import { Component, Input } from '@angular/core';
import { Record } from 'src/app/core/interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent  {

  @Input() items: Record[] | undefined;
  constructor() { }

  

}
