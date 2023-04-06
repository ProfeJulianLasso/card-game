import { Component } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ButtonType, Color, IAtmButton } from 'src/app/components/ions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  btnSignOut: IAtmButton;

  constructor(private readonly authService: AuthService) {
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
}
