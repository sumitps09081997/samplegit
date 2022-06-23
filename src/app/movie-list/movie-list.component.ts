import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{

  constructor(private service:ShowInformationService) { }
  message:any;

        showid!:number;
        moviename!:string;
        totalnooftickets!:number;
        date!:Date;
        bookingcount!:number;
       

  ngOnInit(): void {
   
  }

  
 public display(){
  this.message=this.service.displayMovie().subscribe(data=>this.message=data);
 }

}
