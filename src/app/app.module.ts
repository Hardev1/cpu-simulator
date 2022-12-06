import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AluComponent } from './alu/alu.component';
import { MarComponent } from './mar/mar.component';
import { MbrComponent } from './mbr/mbr.component';
import { CpComponent } from './cp/cp.component';
import { UcComponent } from './uc/uc.component';
import { BrComponent } from './br/br.component';
import { RiComponent } from './ri/ri.component';
import { BusesComponent } from './buses/buses.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MemoriaComponent } from './memoria/memoria.component';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    AluComponent,
    MarComponent,
    MbrComponent,
    CpComponent,
    UcComponent,
    BrComponent,
    RiComponent,
    BusesComponent,
    FormComponent,
    MemoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
