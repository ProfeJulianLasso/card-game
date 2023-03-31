import { Component } from '@angular/core';

@Component({
  selector: 'app-tmpl-login',
  templateUrl: './tmpl-login.component.html',
  styleUrls: ['./tmpl-login.component.scss'],
})
export class TmplLoginComponent {
  button = {
    text: 'Login',
    execute: () => {
      console.log('Login');
    },
  };
}
