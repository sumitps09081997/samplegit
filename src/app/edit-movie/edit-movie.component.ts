import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';
import { ShowInformation } from '../show_information';
import { Theatre } from '../theatre';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private service:ShowInformationService) { }
  theatreid!:number;
  message:any;
  admin:ShowInformation= new ShowInformation();
  admins:Theatre=new Theatre();

  ngOnInit(): void {
  }
  public editMovieNow(){
 let resp=this.service.editMovie(this.admin);
 resp.subscribe((data)=>this.message=data);
 
 


    }
}
