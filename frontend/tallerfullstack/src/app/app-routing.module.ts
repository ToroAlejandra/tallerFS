import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthGuard } from './auth-guard/guard-auth.guard';
import { LoginGuard } from './auth-guard/login.guard';
import { AddCoinsComponent } from './components/add-coins/add-coins.component';
import { ListCoinsCountryComponent } from './components/list-coins-country/list-coins-country.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: '', canActivate: [GuardAuthGuard], component: TableListComponent}, //guards
  { path: 'auth', canActivate: [LoginGuard], component: AuthComponent},
  { path: 'coin-list', canActivate: [GuardAuthGuard], component: TableListComponent },
  { path: 'modal', component: AddCoinsComponent},
  { path: 'list-coins-user', canActivate: [GuardAuthGuard], component: ListCoinsCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
