import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'modulos', loadChildren: '../com.fenix/pages/ModuloSistema/share/ModuloSistema.modulo#ModuloSistemaModulo' },
  { path: '', redirectTo: '/modulos', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
