import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../Shared/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  url: string = 'http://localhost:32393/api/Address';
  constructor(private _http: HttpClient) {}

  GetAllAddresses(): Observable<Address[]> {
    return this._http.get<Address[]>(this.url);
  }

  getAddressById(id: any): Observable<Address> {
    return this._http.get<Address>(`${this.url}/${id}`);
  }

  AddAddress(data: Address): Observable<any>{
    return this._http.post<any>(this.url, data);
  }

  DeleteAddress(id: any): Observable<Address[]> {
    return this._http.delete<Address[]>(`${this.url}/${id}`);
  }

  UpdateAddress(data: Address): Observable<any>{
    return this._http.put(`${this.url}/${data.Id}`,data);
  }
}
