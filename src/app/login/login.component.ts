import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../services/data-service.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailid: string;
  pass: string;
  loginfailed = false;

  constructor(private dataService: DataServiceService, public router: Router) { }

  ngOnInit(): void {



  }
  sub() {
    this.loginfailed = false;
    this.dataService.auth(this.emailid, this.pass).subscribe(result=>{
      
      if (result && result.contactId) {
        localStorage.setItem('userdata',JSON.stringify(result));
        this.router.navigate(['home']);
      }
      else {
        this.loginfailed = true;
  
      }
  
    })
    
  }

}
