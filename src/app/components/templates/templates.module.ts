// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Atoms
import { AtomsModule } from '../atoms/atoms.module';

// Components
import { TmplLoginComponent } from './tmpl-login/tmpl-login.component';

@NgModule({
  declarations: [TmplLoginComponent],
  exports: [TmplLoginComponent],
  imports: [CommonModule, AtomsModule],
})
export class TemplatesModule {}
