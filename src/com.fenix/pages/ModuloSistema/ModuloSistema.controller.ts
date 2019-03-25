import { Component, OnInit } from '@angular/core';
import { ModuloSistemaService } from '../../services/ModuloSistema.service';

import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { ModuloSistema } from 'src/com.fenix/domain/ModuloSistema.model';


@Component({
    templateUrl: 'ModuloSistema.view.html'
})
export class ModuloSistemaControler implements OnInit {
    
    items$ :  Observable<ModuloSistema[]>;
    sistemaForm : FormGroup;
    
    constructor( 
                protected moduloSistemaService: ModuloSistemaService,
                protected formBuilder : FormBuilder
                ){ } 
    
    ngOnInit(): void {
        this.getModulos();    

        this.sistemaForm = this.formBuilder.group({
                descricao: ['']
        })
    }

    getModulos(){
        this.items$  = this.moduloSistemaService.findAll();
    }

    save() {
             const descricao =  this.sistemaForm.get('descricao').value as string;
             this.items$     =  this.moduloSistemaService.add(  {descricao} )
                .pipe(switchMap (  () => this.moduloSistemaService.findAll() ) )
                .pipe( tap (   
                                () => this.sistemaForm.reset()
                  ) )
    }

    delete(id : number){
        console.log(id)
        this.items$     =  this.moduloSistemaService.delete( id )
        .pipe( switchMap (  () => this.moduloSistemaService.findAll() ) )
    }
}