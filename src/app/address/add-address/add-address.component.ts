import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  public addresses: any[] = [{
    id: 1,
    address: '',
  }];
  Person_Id!:number;
  constructor() {

  }

  ngOnInit() {

  }

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }

}
