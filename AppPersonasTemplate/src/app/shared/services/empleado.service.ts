import { Injectable } from '@angular/core';
import { RespuestaEmpleados } from '../models/respuesta-empleados.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

    constructor(private http: HttpClient) { }

    getEmpleados(): Observable<RespuestaEmpleados> {
        return this.http.get<RespuestaEmpleados
        /*{
            status: string;
            data: Empleado[];
        }*/>("https://dummy.restapiexample.com/api/v1/employees");
    }

    crearEmpleado() {
        const empl = new Empleado();
        empl.employee_age = 30;
        empl.employee_name = "Juan Fernando";
        empl.employee_salary = 350000;
        this.http.post("https://dummy.restapiexample.com/api/v1/create", empl)
            .subscribe(resp => console.log(resp));
    }
}
