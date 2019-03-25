import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModuloSistemaService } from '../../../services/ModuloSistema.service';

import { ModuloSistemaControler } from '../ModuloSistema.controller';
import { ModuloSistemaRouting } from './ModuloSistema.routing';
import { ModuloSistemaDetailController } from '../detail/ModuloSistemaDetail.controller';


@NgModule({
  declarations: [
     ModuloSistemaControler,
     ModuloSistemaDetailController
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ModuloSistemaRouting
  ],
  exports:[
    HttpClientModule
  ],
  providers: [
    ModuloSistemaService
  ]
})
export class ModuloSistemaModulo { }
