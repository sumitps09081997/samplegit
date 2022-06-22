import { Component, OnInit } from '@angular/core';
import { Theatre } from '../theatre';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {

  constructor(private service:TheatreService) { }
 message:any;
 admin:Theatre=new Theatre();
  ngOnInit(): void {
  }
public addTheatreNow(){
  let resp=this.service.addTheatre(this.admin);
  resp.subscribe((data)=>this.message=data);
}
}
