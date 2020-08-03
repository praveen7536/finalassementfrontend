import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalDataSummary, addticket,updatecontact,updateticket } from "../models/global-data";


import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private globalDataUrl = `https://freshdeskdb.azurewebsites.net/api/freshdesk/gettickets`
  private getcontacturl=`https://freshdeskdb.azurewebsites.net/api/Freshdesk/GetContacts`
 
  
 

  constructor(private http: HttpClient) { }
  getGlobalData(): Observable<any> {
    return this.http.get(this.globalDataUrl)
  }

  addTicket(addticket): Observable<any> {
    return this.http.post('https://freshdeskdb.azurewebsites.net/api/freshdesk/addticket', addticket)
  }


  getticketbyid(id): Observable<any> {
    return this.http.get('https://freshdeskdb.azurewebsites.net/api/Freshdesk/GetTicketsById?id=' + id)
  }


  auth(email, password): Observable<any> {
    return this.http.get('https://freshdeskdb.azurewebsites.net/api/Freshdesk/auth?email=' + email + '&password=' + password)
  }

  getcontactbyid(idd): Observable<any> {
    return this.http.get('https://freshdeskdb.azurewebsites.net/api/Freshdesk/GetContactsById?id=' + idd)
  }

  addcontact(addcontact): Observable<any> {
    return this.http.post('https://freshdeskdb.azurewebsites.net/api/freshdesk/addcontact', addcontact)
  }

  getcontact():Observable<any>{
    return this.http.get(this.getcontacturl)
  }

  deletecontact(id1):Observable<any>{
    return this.http.get(`https://freshdeskdb.azurewebsites.net/api/Freshdesk/DeleteContact?id=`+id1)
  }

  deleteticket(id2):Observable<any>{
    return this.http.get(`https://freshdeskdb.azurewebsites.net/api/Freshdesk/Deleteticket?id=`+id2)
  }

  updatecontact(updatecontact):Observable<any>{
    return this.http.post(`https://freshdeskdb.azurewebsites.net/api/Freshdesk/updatecontact`,updatecontact)
  }

  updateticket(addticket):Observable<any>{
    return this.http.post(`https://freshdeskdb.azurewebsites.net/api/Freshdesk/updateticket`,addticket)
  }



}





