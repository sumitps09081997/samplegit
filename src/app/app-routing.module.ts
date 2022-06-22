import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddShowTimingsComponent } from './add-show-timings/add-show-timings.component';
import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { DeleteShowTimingsComponent } from './delete-show-timings/delete-show-timings.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateShowTimingsComponent } from './update-show-timings/update-show-timings.component';

const routes: Routes = [
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'add-show-timings', component: AddShowTimingsComponent},
  { path: 'add-theatre', component: AddTheatreComponent},
  { path: 'delete-movie', component: DeleteMovieComponent},
  { path: 'delete-show-timings', component: DeleteShowTimingsComponent},
  { path: 'edit-movie', component: EditMovieComponent},
  { path: 'movie-list', component: MovieListComponent},
  { path: 'update-show-timings', component: UpdateShowTimingsComponent},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
