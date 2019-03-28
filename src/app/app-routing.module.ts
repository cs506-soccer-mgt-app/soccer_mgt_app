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
  {
    path: 'team-details',
   loadChildren: './team/team-details/team-details.module#TeamDetailsPageModule'
  },
  {
    path: 'game-details/:id',
   loadChildren: './game/game-details/game-details.module#GameDetailsPageModule'
  },
  {
    path: 'edit-game/:id',
   loadChildren: './game/edit-game/edit-game.module#EditGamePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
