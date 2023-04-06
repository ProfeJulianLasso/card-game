import { Component, Input } from '@angular/core';
import { IAtmButton } from '../../ions';

@Component({
  selector: 'app-tmpl-login',
  templateUrl: './tmpl-login.component.html',
  styleUrls: ['./tmpl-login.component.scss'],
})
export class TmplLoginComponent {
  @Input() btnLogin: IAtmButton;

  constructor() {
    this.btnLogin = {} as IAtmButton;
  }
}
