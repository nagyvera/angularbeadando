import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardGuard} from './auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'characters', component: CharactersComponent, canActivate: [] },
  { path: 'detail/:id', component: CharacterDetailComponent, canActivate: [] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [] },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
