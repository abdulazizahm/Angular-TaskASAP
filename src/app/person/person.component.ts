import { Component, OnInit } from '@angular/core';
import { PersonService } from '../Services/person.service';
import { Person } from '../Shared/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  Persons:Person[]=[]

  constructor(private _PersonService:PersonService) { }

  ngOnInit(): void {
    this._PersonService.GetAllPersons().subscribe((data)=>
    {
      this.Persons=data
      console.log(data);
    }
    );
  }
  deletePerson(id: any)
  {
    this._PersonService.DeletePerson(id).subscribe(data=>{
    this.Persons=this.Persons.filter(item=>item.ID !=id);
    console.log(data)
  });
  }

}
