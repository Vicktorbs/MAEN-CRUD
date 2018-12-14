import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service'
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  // Agregar empleado
  addEmployee (form: NgForm) {
    this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Save successfuly'});
      })
  }

  // Obtener un arreglo de los datos guardados
  getEmployees () {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
        console.table(res);
        
      })
  }

  // Reseteo del formulario
  resetForm (form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.slectedEmployee = new Employee;
    }
  }

}
