import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Theatre } from '../theatre';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {
  
  addTheatreForm!:FormGroup;
  ngOnInit(): void {
    this.addTheatreForm=new FormGroup({
      locationName:new FormControl('',Validators.required),
      theatreName:new FormControl('',Validators.required)
    })
  }
  constructor(private service:TheatreService) { }
 message:any;
 admin:Theatre=new Theatre();
 
public addTheatreNow(){
  let resp=this.service.addTheatre(this.admin);
  resp.subscribe((data)=>this.message=data);
}
}
