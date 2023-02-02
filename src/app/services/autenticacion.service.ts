import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }
  readonly ISLOGGEDUSER = 'islogged';
  readonly ISLOGGEDADMIN = 'islogged';
  readonly ISLOGGEDKEY = 'islogged';
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();


  getRol(rol:string){
      if(rol==='Admin'){
        localStorage.setItem(this.ISLOGGEDADMIN, 'true');
        this.changeLoginStatusSubject.next(true);
        return true;
      }
      else if(rol==='User'){
        localStorage.setItem(this.ISLOGGEDUSER, 'true');
        this.changeLoginStatusSubject.next(true);
        return true;
      } 
      return false;
  }
  logout() {
    localStorage.removeItem(this.ISLOGGEDADMIN);
    localStorage.removeItem(this.ISLOGGEDUSER);
    this.changeLoginStatusSubject.next(false);
   
  }

   isLoggedIn() {
    const isLoggedAdmin = localStorage.getItem(this.ISLOGGEDADMIN);
    const isLoggedUser = localStorage.getItem(this.ISLOGGEDUSER);
    if (isLoggedAdmin ||isLoggedUser ) {
    return true;
    }
    else{
      return false;
    }
  }
}
