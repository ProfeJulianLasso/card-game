import { Component } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ButtonType, Color, IAtmButton } from '../../../../components/ions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  btnLogin: IAtmButton;

  constructor(private readonly authService: AuthService) {
    this.btnLogin = {
      text: 'identifícate con Google',
      type: ButtonType.Button,
      color: Color.Primary,
      size: 'calc(100vw - 32px)',
      icon: faGoogle,
      execute: () => {
        this.authService.GoogleAuth();
      },
    };
  }
}
