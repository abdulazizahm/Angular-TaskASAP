import { Component, OnInit } from '@angular/core';
import { PersonService } from '../Services/person.service';
import { Person } from '../Shared/Person';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  Persons:Person[]=[]
  constructor(private _personService:PersonService) 
  {}

  ngOnInit(): void {
    this._personService.GetAllPersons().subscribe((data)=>
    {
      this.Persons=data
      console.log(data);
    }
    );
  }

}
