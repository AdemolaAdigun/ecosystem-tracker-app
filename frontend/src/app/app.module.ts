import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import {AppRoutingModule} from './app-routing.module';
import {EcosystemsComponent} from '../pages/ecosystem/ecosystem.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EcosystemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
