// Modelos de los datos, para hacer las consultas a la DB
const Employee = require('../models/employee');
// Definicion del objeto
const employeeCtrl = {};

// Metodos
// Obtiene todos los empleados
employeeCtrl.getEmployees = async (red, res) => { 
    const employees = await Employee.find()
    // Respuesta al navegador
    res.json(employees);
};
// Agrega un nuevo registro del empleado
employeeCtrl.createEmployee = async (req, res) => {
    // Guardar los datos
    const employee = new Employee({
        name: req.body.name,
        activity: req.body.activity,
        production: req.body.production
    });
    await employee.save();
    res.json({
        'status': 'Employee saved'
    });
};
// Obtiene solo un empleado
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee)
}
// Editar un empleado
employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        activity: req.body.activity,
        production: req.body.production
    };
    await Employee.findByIdAndUpdate(id, { $set: employee}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
// Borrar el registro de un empleado
employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employed deleted'
    })
}

module.exports = employeeCtrl;