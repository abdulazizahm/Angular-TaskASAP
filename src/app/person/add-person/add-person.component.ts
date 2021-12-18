import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddAddressComponent } from 'src/app/address/add-address/add-address.component';
import { PersonService } from 'src/app/Services/person.service';
import { Address } from 'src/app/Shared/Address';
import { Person } from 'src/app/Shared/Person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  PersonData!: Person; 
  eorrors!:string
  @ViewChild(AddAddressComponent)
  child!: AddAddressComponent;
  personeladdresses:Address[]=[];



  constructor(private _personService:PersonService,private _router:Router) 
  {
    this.PersonData=new Person(0,"","","",0,[]);
  }

  ngOnInit(): void {
  }
  onSubmit() 
  {
    if(this.child.addresses.length==0||this.child.addresses[0].address==="")
    {
      this.eorrors="please add one address at least";
      return;
    }
    this.personeladdresses=[];
    this.child.addresses.forEach(element => {
      this.personeladdresses.push(new Address(0,0,element.address));
    });
    this.PersonData.Addresses=this.personeladdresses;
    this._personService.AddPerson(this.PersonData).subscribe(
      (data)=>
      {
        //alert(data.ID);
        this._router.navigate(["/person"])
      }, 
    (error)=> {this.eorrors=error.error;console.log(error.error)});
  }
  

}
