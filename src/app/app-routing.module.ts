import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';
import { AddPersonComponent } from './person/add-person/add-person.component';
import { PersonComponent } from './person/person.component';
import { UpdatePersonComponent } from './person/update-person/update-person.component';

const routes: Routes = 
[
  { path: 'person', component: PersonComponent},
  { path: 'person/Add', component: AddPersonComponent },
  { path: 'person/Edit/:id', component: UpdatePersonComponent },
  { path: 'address', component: AddressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
