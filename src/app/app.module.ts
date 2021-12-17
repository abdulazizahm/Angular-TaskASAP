import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { AddPersonComponent } from './person/add-person/add-person.component';
import { UpdatePersonComponent } from './person/update-person/update-person.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AddressComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    AddAddressComponent,
    UpdateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
