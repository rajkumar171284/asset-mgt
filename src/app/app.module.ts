import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from './shared/shared.module';
import { ReportsComponent } from './components/reports/reports.component';
import{AuthService} from './services/auth.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,SharedModule,HttpClientModule
  ],
  
  providers: [AuthService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
