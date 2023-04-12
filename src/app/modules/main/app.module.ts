// Libraries
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Environments
import { environment } from 'src/environments/environment.development';

// Main Layout
import { AppLayoutComponent } from './layout/app/app-layout.component';

// Atomic Design
import { AtomsModule } from '../../components/atoms/atoms.module';
import { MoleculesModule } from '../../components/molecules/molecules.module';
import { OrganismsModule } from '../../components/organisms/organisms.module';
import { TemplatesModule } from '../../components/templates/templates.module';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [AppLayoutComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
  ],
  providers: [],
  bootstrap: [AppLayoutComponent],
})
export class AppModule {}
