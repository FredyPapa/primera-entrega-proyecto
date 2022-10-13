import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContenedorAlumnoComponent } from './components/contenedor-alumno/contenedor-alumno.component';
import { DescripcionSexoPipe } from './pipes/descripcion-sexo.pipe';
import { DataAlumnoPipe } from './pipes/data-alumno.pipe';
import { EstiloSexoDirective } from './directives/estilo-sexo.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ContenedorAlumnoComponent,
    DescripcionSexoPipe,
    DataAlumnoPipe,
    EstiloSexoDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
