import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  // Funciones para cada servicios a la API
  getVista(): Observable<Users[]>{
    let rutaApi = environment.apiURL + 'vista/'
    return this.http.get<Users[]>(rutaApi);
  } 
  
  getNuevo(registro: Users): Observable<Users>{
      let rutaApi = environment.apiURL + 'nuevo/'
      return this.http.post<Users>(rutaApi, registro); 
  }

  getBuscar(datosId: string): Observable<Users[]>{
    let rutaApi = environment.apiURL + 'buscar/' + datosId;
    return this.http.get<Users[]>(rutaApi);
  }

  getEliminar(datosId: string): Observable<string>{
    let rutaApi = environment.apiURL + 'eliminar/' + datosId;
    return this.http.delete<string>(rutaApi);
  }

  getEditar(registro: Users): Observable<Users>{
    let rutaApi = environment.apiURL + 'editar/';
    return this.http.put<Users>(rutaApi, registro);
  }

  checkUser(datos: any): Observable<any> {
    let rutaApi = environment.apiURL + 'check';
    let httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    };
    return this.http.post<any>(rutaApi, datos, httpOptions);
  }
  /* apiVista = environment.apiURL + 'vista/';

  // Metodos GET para obtener datos de la API users

  getUsersAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.apiVista);
  }

  getUserId(userId: string): Observable<Users> {
    const url = this.apiVista + userId;
    return this.http.get<Users>(url);
  }*/

  // Metodo POSt para enviar datos a la API users

  /* postUser(usuario: Users): Observable<Users>{
    let nuevo = environment.apiURL + 'nuevo/'
    return this.http.post<Users>(nuevo, usuario);  
  } */

  /*
  // Metodo Delete para eliminar datos a la API users

  deleteUser(usuario: Users): Observable<Users>{
    let nuevo = environment.apiURL + 'eliminar/'
    return this.http.post<Users>(nuevo, usuario);  
  }

  // Metodo GET para el Interceptor
  getUsersAllInterceptor():Observable<any>{
    return this.http.get(this.apiVista, {observe: 'response'});
  } */
}
