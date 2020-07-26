import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { GlobalDataSummary, addticket, addcontact, getcontacts, updateticket, updatecontact } from '../models/global-data'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: GlobalDataSummary[] = [];
  temp: getcontacts[] = [];
  contacttable = false;
  tickettable = false;
  contact: addcontact = {};
  ticket :addticket={};
  updatetic:updateticket={};
  updatecon:updatecontact={};
  getconbyid;
  getticbyid;
  conbyid;
  ticbyid;

  
 
 
  




  constructor(private dataService: DataServiceService) { }


  ngOnInit(): void {
    var userdata = localStorage.getItem('userdata')
    if (userdata) {
      console.log(JSON.parse(userdata));
    }

  }
  showticket() {
    this.tickettable = false;
    this.dataService.getGlobalData().subscribe(result => {
      this.data = result;
      this.tickettable = true;
    }) 

  }
  closeticket() {
    this.tickettable = false;
  }
  showcontact() {
    this.contacttable = false;
    this.dataService.getcontact().subscribe(result => {
      this.temp = result;
      this.contacttable = true;
    })

  }
  closecontact() {
    this.contacttable = false;
  }
  add() {
    this.dataService.addcontact(this.contact).subscribe(result => {
      console.log(result);
    })
   
  }
  addticket(){
    this.dataService.addTicket(this.ticket).subscribe(result => {
      console.log(result);
    })
  }
  updateticket(){
    this.dataService.updateticket(this.updatetic).subscribe(result => {
      console.log(result);
      
    }
    )
    
  }
  updatecontact(){
    this.dataService.updatecontact(this.updatecon).subscribe(result => {
      console.log(result);
      
    }
    )

    
  }
  deletecontact(id){
    this.dataService.deletecontact(id).subscribe(result => {
      console.log(result);
      if(result)
      {
        this.showcontact();
      }
    }
    )
    
  }
  



  getcontactbyid(id){
    this.dataService.getcontactbyid(id).subscribe(result => {
      console.log(result);
      this.conbyid=result;
      console.log(this.conbyid);
    }
    )
  }
  getticketbyid(id){
    this.dataService.getticketbyid(id).subscribe(result => {
      console.log(result);
     this.ticbyid=result;
    }
    )
  }
  deleteticket(id){
    this.dataService.deleteticket(id).subscribe(result => {
      console.log(result);
      if(result)
      {
        this.showticket();
      }
    }
    )
  }
  



}
