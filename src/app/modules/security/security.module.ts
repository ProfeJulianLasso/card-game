// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routing
import { SecurityRoutingModule } from './security-routing.module';

// Atomic Design
import { AtomsModule } from '../../components/atoms/atoms.module';
import { MoleculesModule } from '../../components/molecules/molecules.module';
import { OrganismsModule } from '../../components/organisms/organisms.module';
import { TemplatesModule } from '../../components/templates/templates.module';

// Components
import { SecurityLayoutComponent } from './layout/security-layout/security-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    SecurityLayoutComponent,
    DashboardComponent,
    VerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
  ],
})
export class SecurityModule {}
