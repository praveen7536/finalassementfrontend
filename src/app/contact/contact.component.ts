import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../services/data-service.service";
import { addticket } from '../models/global-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  tickets:addticket;

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  addticket(){
    this.dataService.addTicket(this.tickets).subscribe(result => {
      console.log(result);
    })
  }

}
