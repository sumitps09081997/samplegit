import { Component, OnInit } from '@angular/core';
import { ShowInformationService } from '../show-information.service';
import { ShowInformation } from '../show_information';

@Component({
  selector: 'app-delete-show-timings',
  templateUrl: './delete-show-timings.component.html',
  styleUrls: ['./delete-show-timings.component.css']
})
export class DeleteShowTimingsComponent implements OnInit {

 
  message:any;
  showid!:number;
  constructor(private service:ShowInformationService) { }
  
    ngOnInit(): void {
    }

    public deleteShowNow(){
      this.service.deleteShow(this.showid).subscribe((data)=>this.message=data);
    }

  }
