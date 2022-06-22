import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  message:any;
  showid!:number;

  constructor(private service:ShowInformationService) { }
  
  ngOnInit(): void {
  }

  public deleteMovieNow(){
   this.service.deleteMovie(this.showid).subscribe((data)=>this.message=data);
  }

}