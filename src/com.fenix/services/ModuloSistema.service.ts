import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuloSistema } from '../domain/ModuloSistema.model';

const httpOptions = {
     headers: new HttpHeaders( {'Content-Type': 'application/json' } )
  };

  const API_URL =  'http://localhost:8080/modulosistema/';

 @Injectable({ providedIn: 'root' })
export class ModuloSistemaService {

    constructor(public http: HttpClient) {
    }
    
    findById(id: number ) : Observable<ModuloSistema> {
     return this.http.get<ModuloSistema>(API_URL+id);  
    }
    
    findAll() : Observable<ModuloSistema[]>  {
        return this.http.get<ModuloSistema[]>(API_URL);
    }
    
   add ( descricao: ModuloSistema )  {
        return this.http.post<ModuloSistema>(API_URL, descricao, httpOptions );   
   }

   update( item: ModuloSistema, id: number ){
        return this.http.put(API_URL+id, item, httpOptions );
   }

   delete(id : number ){
        return this.http.delete<number>(API_URL+id, httpOptions );   
   }
   

} // end class


