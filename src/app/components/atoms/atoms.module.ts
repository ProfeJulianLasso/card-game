// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AtmButtonComponent } from './atm-button/atm-button.component';
import { AtmTabsComponent } from './atm-tabs/atm-tabs.component';

@NgModule({
  declarations: [AtmButtonComponent, AtmTabsComponent],
  exports: [AtmButtonComponent, AtmTabsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
})
export class AtomsModule {}
