import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';


const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'team', component: TeamListComponent},
  {path: 'team/:id', component: TeamDetailComponent},
  {path: 'trainer', component: TrainerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
