import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/Alumno';

@Pipe({
  name: 'dataAlumno'
})
export class DataAlumnoPipe implements PipeTransform {

  transform(alumnos: Alumno[], ...args: unknown[]): Alumno[] {
    let nuevoAlumno:any;
    let nuevaListaAlumnos:any[]=[];
    alumnos.forEach(alumno => {
      nuevoAlumno={
        id:alumno.id,
        nombre:alumno.nombre+' ' +alumno.apellidoPaterno+' ' +alumno.apellidoMaterno,
        sexo:alumno.sexo
      }
    });
    nuevaListaAlumnos.push(nuevoAlumno);
    return nuevaListaAlumnos;
  }

}
