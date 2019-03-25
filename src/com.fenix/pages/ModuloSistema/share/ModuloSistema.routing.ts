import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloSistemaControler } from '../ModuloSistema.controller';
import { ModuloSistemaDetailController } from '../detail/ModuloSistemaDetail.controller';



const routes: Routes = [
  { path: '', component: ModuloSistemaControler },
  { path: ':id', component: ModuloSistemaDetailController }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloSistemaRouting { }

