import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Pipe, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTreeModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationAreaComponent } from './notification-area/notification-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigurationComponent,
    DashboardNavComponent,
    NotificationAreaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTreeModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
