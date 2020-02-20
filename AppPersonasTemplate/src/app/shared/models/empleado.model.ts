export enum Estados {
    Sincronizado,
    Pendiente
}

export class Empleado {
    public employee_name: string;
    employee_age: number;
    employee_salary: number;
    status: Estados;
    constructor() { }
}
