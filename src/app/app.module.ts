import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/main/app-routing.module';
import { AppLayoutComponent } from './modules/main/layout/app/app-layout.component';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppLayoutComponent],
})
export class AppModule {}
