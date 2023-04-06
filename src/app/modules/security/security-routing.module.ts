// Libraries
import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['security/sign-in']);
const redirectLoggedInToDashboard = () =>
  redirectLoggedInTo(['security/dashboard']);

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: LoginPageComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToDashboard },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'verify-email-address',
        component: VerifyEmailComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      { path: '', redirectTo: '/security/sign-in', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
