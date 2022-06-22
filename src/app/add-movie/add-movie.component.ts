import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';
import { ShowInformation } from '../show_information';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  
  constructor(private service:ShowInformationService, private services:TheatreService) { }
  message:any;
  admin:ShowInformation=new ShowInformation();
  
  ngOnInit(): void {
  }

  

  public addMovieNow(){
  let resp=this.service.addMovie(this.admin);
  resp.subscribe((data)=>this.message=data);
  }
url="../../assets/pvr2.jpg";
public onselectFile(e:any){
if(e.target.files){
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event:any)=>{
  this.url=event.target.result;
}
}
}

}
