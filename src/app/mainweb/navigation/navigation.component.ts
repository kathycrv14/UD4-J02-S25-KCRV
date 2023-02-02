import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public autenticacion: AutenticacionService) {}

  usuariologueado = false;
  
  ngOnInit(){
    this.usuariologueado = this.autenticacion.isLoggedIn();
    this.autenticacion.changeLoginStatus$.subscribe(
    (loggedSatus: boolean) => this.usuariologueado = loggedSatus
    );
  }
  
  logout(){
    this.autenticacion.logout();
  }
}
