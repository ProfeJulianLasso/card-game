// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AtmButtonComponent } from './atm-button/atm-button.component';

@NgModule({
  declarations: [AtmButtonComponent],
  exports: [AtmButtonComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AtomsModule {}
