import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard-nav', component: DashboardNavComponent, canActivate: [LoggedInGuard] },
  { path: 'configuration', component: ConfigurationComponent, canActivate: [LoggedInGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
