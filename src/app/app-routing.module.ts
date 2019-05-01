import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  {
    path: 'game-details/:id',
   loadChildren: './game/game-details/game-details.module#GameDetailsPageModule'
  },
  {
    path: 'edit-game/:id',
   loadChildren: './game/edit-game/edit-game.module#EditGamePageModule'
 },
  { path: 'team-details/:id', loadChildren: './team/team-details/team-details.module#TeamDetailsPageModule' },
  { path: 'team-details/:id/add-game', loadChildren: './game/add-game/add-game.module#AddGamePageModule' },
  { path: 'create-team', loadChildren: './team/create-team/create-team.module#CreateTeamPageModule' },
  { path: 'edit-team/:id', loadChildren: './team/edit-team/edit-team.module#EditTeamPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'team-details/:id/invite-player', loadChildren: './player/invite-player/invite-player.module#InvitePlayerPageModule' },
  { path: 'join-team', loadChildren: './team/join-team/join-team.module#JoinTeamPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'user-game-list', loadChildren: './game/user-game-list/user-game-list.module#UserGameListPageModule' },
  { path: 'game-details/:game_id/players/:player_id', loadChildren: './availability/availability-mgr/availability-mgr.module#AvailabilityMgrPageModule' },
  { path: 'edit-player/:id', loadChildren: './player/edit-player/edit-player.module#EditPlayerPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
