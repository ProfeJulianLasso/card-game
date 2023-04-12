// https://javascript.plainenglish.io/dynamic-tab-based-application-using-angular-material-9f9da7de5732

import { Type } from '@angular/core';

export class Tab {
  id!: number;
  title: string;
  tabData: any;
  active!: boolean;
  component: Type<any>;

  constructor(component: Type<any>, title: string, tabData: any) {
    this.tabData = tabData;
    this.component = component;
    this.title = title;
  }
}
