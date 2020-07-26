export class GlobalDataSummary{
    ticketid?:Number;
    name?:string;
    query?:string;
    createddate?:string;
    duedate?:string;
    isactive?:boolean;
    contactid?:number;

}
export class getcontacts{
    first_Name?:string;
    last_Name?:string;
    phone?:string;
    email?:string;
    Gender?:string;
    Isactive?:boolean;
    Password?:string;

}




export class addticket{
    
        name?:string;
        query?: string;
        isactive?:boolean;
        contactsId?:number;
      
}
export class addcontact{
    First_Name?:string;
    Last_Name?:string;
    Phone?:string;
    Email?:string;
    Gender?:string;
    Isactive?:boolean;
    Password?:string;
}


export class updatecontact{
    First_Name?:string;
    Last_Name?:string;
    Phone?:string;
    Email?:string;
    Gender?:string;
    Isactive?:boolean;
    Password?:string;
}


export class updateticket{
    name?:string;
    query?: string;
    isactive?:boolean;
    contactsId?:number;
}
