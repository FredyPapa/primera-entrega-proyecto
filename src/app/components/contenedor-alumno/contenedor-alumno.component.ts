import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ListaAlumnos } from 'src/app/data/dataAlumnos';
import { Alumno } from '../../models/Alumno';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contenedor-alumno',
  templateUrl: './contenedor-alumno.component.html',
  styleUrls: ['./contenedor-alumno.component.css']
})
export class ContenedorAlumnoComponent implements OnInit {
  formAlumno:FormGroup;
  flagEditar=false;
  idEditar=0;
  loading=false;
  titulo = "Registrar Alumno";
  dataSource:Alumno[]=ListaAlumnos;
  displayedColumns: string[] = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'sexo','accion'];
  ELEMENT_DATA = new MatTableDataSource<Alumno>();



  constructor(
              private fb:FormBuilder,
              private toastr: ToastrService
  ) {
    this.formAlumno=this.fb.group({
      nombre:["",Validators.required],
      apellidoPaterno:["",Validators.required],
      apellidoMaterno:["",Validators.required],
      sexo:["",Validators.required],
    });
  }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataSource;
  }

  eliminarAlumno(id:number){
    if(confirm("¿Está seguro que desea eliminar el alumno?")){
      this.dataSource = this.dataSource.filter((alumno)=>{
        return alumno.id !== id;
      });
      this.ELEMENT_DATA.data = this.dataSource;
    }
  }

  seleccionarAlumno(id:number){
    let alummno = this.dataSource.filter((alumno)=>{
      return alumno.id == id;
    });
    this.flagEditar=true;
    this.idEditar=id;
    this.cargarData(alummno[0]);
  }

  cargarData(alumno:Alumno):void{
    this.formAlumno.controls['nombre'].setValue(alumno.nombre);
    this.formAlumno.controls['apellidoPaterno'].setValue(alumno.apellidoPaterno);
    this.formAlumno.controls['apellidoMaterno'].setValue(alumno.apellidoMaterno);
    this.formAlumno.controls['sexo'].setValue(alumno.sexo);
  }

  registrarAlumno(){
    let id;
    if(this.flagEditar){
      id=this.idEditar;
    }else{
      id=this.dataSource.length+1;
    }

    const ALUMNO:Alumno = {
      id:id,
      nombre:this.formAlumno.value.nombre,
      apellidoPaterno:this.formAlumno.value.apellidoPaterno,
      apellidoMaterno:this.formAlumno.value.apellidoMaterno,
      sexo:this.formAlumno.value.sexo,
    }

    if(this.flagEditar){
      this.dataSource[this.idEditar-1] = ALUMNO;
    }else{
      this.dataSource.push(ALUMNO);
    }
    this.ELEMENT_DATA.data = this.dataSource;
    this.loading=true;
    this.toastr.success("El Alumno fue registrado con éxito","Alumno registrado");
    this.limpiarFormulario();
  }

  limpiarFormulario(){
    this.loading=false;
    this.flagEditar=false;
    this.idEditar=0;
    this.formAlumno.reset();
  }

}
