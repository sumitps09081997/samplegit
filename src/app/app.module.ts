import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { AddShowTimingsComponent } from './add-show-timings/add-show-timings.component';
import { UpdateShowTimingsComponent } from './update-show-timings/update-show-timings.component';
import { DeleteShowTimingsComponent } from './delete-show-timings/delete-show-timings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowInformationService } from './show-information.service';
import { TheatreService } from './theatre.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    MovieListComponent,
    AddTheatreComponent,
    AddShowTimingsComponent,
    UpdateShowTimingsComponent,
    DeleteShowTimingsComponent,
    NavBarComponent,
 
    HomeComponent,
      FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ShowInformationService,
    TheatreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
