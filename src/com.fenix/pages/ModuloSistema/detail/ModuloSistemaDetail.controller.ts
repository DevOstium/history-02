import { Component, Input, OnInit } from '@angular/core';
import { ModuloSistema } from 'src/com.fenix/domain/ModuloSistema.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModuloSistemaService } from 'src/com.fenix/services/ModuloSistema.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, tap } from 'rxjs/operators';


@Component({
    templateUrl: 'ModuloSistemaDetail.view.html'
})

export class ModuloSistemaDetailController implements OnInit {

    moduloSistema$ :  Observable<ModuloSistema>;

    sistemaUpdateForm : FormGroup;
    
    constructor( 
                private moduloSistemaService: ModuloSistemaService,
                private formBuilder : FormBuilder,
                private route: ActivatedRoute,
                private location: Location,
                ){ } 
    
    ngOnInit(): void {
        this.getModulo();    

        this.sistemaUpdateForm = this.formBuilder.group({
                descricao: ['']
        })
    }

      
    getModulo(): void {
         const id = +this.route.snapshot.paramMap.get('id');
         this.moduloSistema$ = this.moduloSistemaService.findById(id);
    }


    goBack() {
        this.location.back();
      }
    
    save() {
        const descricao =  this.sistemaUpdateForm.get('descricao').value as string;
        const id = +this.route.snapshot.paramMap.get('id');
        this.moduloSistema$    =  this.moduloSistemaService
                                    .update(  {descricao}, id )
                                    .pipe(  tap (  () => this.goBack()  ) )
    }
      

}

    


    

