import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthGuard } from './auth-guard/guard-auth.guard';
import { LoginGuard } from './auth-guard/login.guard';
import { TableListComponent } from './components/table-list/table-list.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: '', canActivate: [GuardAuthGuard], component: TableListComponent}, //guards
  { path: 'auth', canActivate: [LoginGuard], component: AuthComponent},
  { path: 'coin-list', canActivate: [GuardAuthGuard], component: TableListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
