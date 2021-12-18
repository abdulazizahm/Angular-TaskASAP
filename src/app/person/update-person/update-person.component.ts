import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateAddressComponent } from 'src/app/address/update-address/update-address.component';
import { PersonService } from 'src/app/Services/person.service';
import { Address } from 'src/app/Shared/Address';
import { Person } from 'src/app/Shared/Person';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {
  PersonData!: Person; 
  eorrors!:string
  @ViewChild(UpdateAddressComponent)
  child!: UpdateAddressComponent;
  personeladdresses:Address[]=[];
  id!:number
  constructor(private _activeRouter:ActivatedRoute,private _personService:PersonService,private _router:Router) 
  {
    this.id=parseInt(this._activeRouter.snapshot.params['id']);
    this._personService.getPersonById(this.id).subscribe((data)=>
    {
    this.PersonData=data
    console.log(data)
    },(error)=>
    {
      alert(error)
    }
    )

   }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if(this.child.addresses.length==0||this.child.addresses[0].DetailsOfAddress==="")
    {
      this.eorrors="please add one address at least";
      return;
    }
    this.personeladdresses=[];
    this.child.addresses.forEach(element => {
      this.personeladdresses.push(new Address(0,this.id,element.DetailsOfAddress));
    });
    this.PersonData.Addresses=this.personeladdresses;
    this._personService.UpdatePerson(this.PersonData).subscribe(
      (data)=>
      {
        //alert(data.ID);
        this._router.navigate(["/person"])
      }, 
    (error)=> {this.eorrors=error.error;console.log(error.error)});
  }

}
