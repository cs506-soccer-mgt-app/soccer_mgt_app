import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'add-game', loadChildren: './game/add-game/add-game.module#AddGamePageModule' },
  { path: 'team-details/:id', loadChildren: './team/team-details/team-details.module#TeamDetailsPageModule' },
  { path: 'create-team', loadChildren: './team/create-team/create-team.module#CreateTeamPageModule' },
  { path: 'edit-team/:id', loadChildren: './team/edit-team/edit-team.module#EditTeamPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
