import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/address.service';
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
  public addresses: any[] = [{
    id: 1,
    address: '',
  }];


  constructor(private _personService:PersonService,private _addressService:AddressService,private _router:Router) 
  {
    this.PersonData=new Person(0,"","","",0,[]);
  }

  ngOnInit(): void {
  }
  onSubmit() 
  {
    this._personService.AddPerson(this.PersonData).subscribe(
      (data)=>
      {
        alert(data.ID);
        this.addresses.forEach(element => {
          this._addressService.AddAddress(new Address(0,data.ID,element.address));
        });
        this._router.navigate(["/person"])
      }, 
    (error)=> {this.eorrors=error.error.error_description;console.log(error.error)});
  }

}
