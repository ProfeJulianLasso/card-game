import { Component, Input } from '@angular/core';
import { Tab } from '../../ions/models/tab.model';

@Component({
  selector: 'app-atm-tabs',
  templateUrl: './atm-tabs.component.html',
  styleUrls: ['./atm-tabs.component.scss'],
})
export class AtmTabsComponent {
  @Input() tabs: Tab[];

  constructor() {
    this.tabs = [];
  }
}
