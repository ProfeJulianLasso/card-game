import { Component } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ButtonType, Color, IAtmButton } from '../../../../components/ions';
import { AuthService } from '../../../security/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  btnSignOut: IAtmButton;
  datos: number;

  constructor(private readonly authService: AuthService) {
    this.datos = 0;
    this.btnSignOut = {
      text: 'logout',
      type: ButtonType.Button,
      color: Color.Primary,
      size: 'calc(100vw - 32px)',
      icon: faRightFromBracket,
      execute: () => {
        this.authService.SignOut();
      },
    };
  }

  btnGoogleAuth(): void {
    this.datos = 1 + 2;
  }
}
