import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../Shared/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = 'http://localhost:32393/api/Person';
  constructor(private _http: HttpClient) {}

  GetAllPersons(): Observable<Person[]> {
    return this._http.get<Person[]>(this.url);
  }

  getPersonById(id: any): Observable<Person> {
    return this._http.get<Person>(`${this.url}/${id}`);
  }

  AddPerson(data: Person): Observable<any>{
    return this._http.post<any>(this.url, data);
  }

  DeletePerson(id: any): Observable<Person[]> {
    return this._http.delete<Person[]>(`${this.url}/${id}`);
  }

  UpdatePerson(data: Person): Observable<any>{
    return this._http.put(`${this.url}/${data.ID}`,data);
  }
}
