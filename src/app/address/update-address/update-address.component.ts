import { Component, Input, OnInit } from '@angular/core';
import { AddressService } from 'src/app/Services/address.service';
import { Address } from 'src/app/Shared/Address';


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {
  addresses:Address[]=[];
  @Input() PersonId:number | undefined;
  constructor(private _AddressService:AddressService) 
  {
    
  }

  ngOnInit(): void {
    this._AddressService.getAddressesByPersonId(this.PersonId).subscribe((data)=>
    {
      this.addresses=data;
    })
  }
  addAddress() {
    this.addresses.push({
      Id: this.addresses.length + 1,
      Person_Id:this.PersonId||0,
      DetailsOfAddress: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }


}
