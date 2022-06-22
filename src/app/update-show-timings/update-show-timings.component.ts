import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';
import { ShowInformation } from '../show_information';

@Component({
  selector: 'app-update-show-timings',
  templateUrl: './update-show-timings.component.html',
  styleUrls: ['./update-show-timings.component.css']
})
export class UpdateShowTimingsComponent implements OnInit {

  constructor(private service:ShowInformationService) { }
  message:any;

  show:ShowInformation=new ShowInformation();
  ngOnInit(): void {
  }

  public updateShowNow(){
    let resp=this.service.updateShow(this.show);
    resp.subscribe((data)=>this.message=data);
  }
}
