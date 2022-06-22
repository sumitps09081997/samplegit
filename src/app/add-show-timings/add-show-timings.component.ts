import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';
import { ShowInformation } from '../show_information';

@Component({
  selector: 'app-add-show-timings',
  templateUrl: './add-show-timings.component.html',
  styleUrls: ['./add-show-timings.component.css']
})
export class AddShowTimingsComponent implements OnInit {


constructor(private service:ShowInformationService) { }
  message:any;

  show:ShowInformation=new ShowInformation();

  ngOnInit(): void {
  }
  public addShowNow(){
    let resp=this.service.addShow(this.show);
   resp.subscribe((data: any)=>this.message=data);
}
}