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
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Updated successfuly'});
          this.getEmployees();
        })
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Save successfuly'});
        this.getEmployees();
      })
    }
  }

  // Obtener un arreglo de los datos guardados
  getEmployees () {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
        console.table(res);
        
      })
  }

  // Editar un registro de empleado
  editEmployee (employee: Employee) {
    this.employeeService.slectedEmployee = employee;
  }
  
  // Eliminar registro de un empleado
  deleteEmployee (_id: string) {
    if (confirm('Are you sure?')) {
      this.employeeService.deleteEmployee(_id)
      .subscribe(res => {
        console.log(res);
        this.getEmployees();
        M.toast({ html: 'Deleted successfuly' });
      })
    }
  }

  // Reseteo del formulario
  resetForm (form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.slectedEmployee = new Employee;
    }
  }

}
