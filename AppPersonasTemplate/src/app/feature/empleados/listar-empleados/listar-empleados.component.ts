import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Empleado } from '~/app/shared/models/empleado.model';
import { EmpleadoService } from '~/app/shared/services/empleado.service';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { RespuestaEmpleados } from '~/app/shared/models/respuesta-empleados.model';

@Component({
    selector: 'ns-listar-empleados',
    templateUrl: './listar-empleados.component.html',
    styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

    @Input() empleados: Empleado[] = [];

    constructor(private service: EmpleadoService, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.service.getEmpleados().subscribe((response: RespuestaEmpleados) => {
            this.empleados = response.data;
        }, err => {
            console.log(err);
        });
    }

    goCrearEmpleado(): void {
        this.router.navigate(["/home/crear"], { transition: { name: "slideLeft" } });
    }

    onItemTap(args: ItemEventData) {
        console.log("tap");
    }
}
