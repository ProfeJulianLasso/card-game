// Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './modules/main/app-routing.module';

// Main Layout
import { AppLayoutComponent } from './modules/main/layout/app/app-layout.component';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppLayoutComponent],
})
export class AppModule {}
