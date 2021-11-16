import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerCreateComponent } from './trainer-create/trainer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TeamDetailComponent,
    TeamListComponent,
    PokemonListComponent,
    TrainerListComponent,
    TrainerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }