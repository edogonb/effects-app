import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: any = null;
  subscrip: Subscription[] = [];

  constructor( private router: ActivatedRoute,
              private store: Store<AppState>) { }


  ngOnInit(): void {

    this.subscrip.push( this.store.select('usuario').subscribe( ({ user }) => {
      this.usuario = user;
    }));

    this.subscrip.push(this.router.params.subscribe( ( {id} ) => {
      this.store.dispatch( cargarUsuario ( {id} ));
    }));

  }

  ngOnDestroy(): void {
    this.subscrip.forEach(element => element.unsubscribe());
  }
 
}
