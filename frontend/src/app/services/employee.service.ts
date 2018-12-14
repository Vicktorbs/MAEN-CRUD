import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  slectedEmployee: Employee;
  employees: Employee[];
  readonly API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.slectedEmployee = new Employee();
  }

  getEmployees () {
    return this.http.get(this.API);
  }

  postEmployee (Employee: Employee) {
    return this.http.post(this.API, Employee);
  }

  putEmployee (Employee: Employee) {
    return this.http.put(this.API + `/${ Employee._id }`, Employee);
  }

  deleteEmployee (_id: string) {
    return this.http.delete(this.API + `/${ _id }`)
  }

}
