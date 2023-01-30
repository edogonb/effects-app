import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, of } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions";





@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    cargarUsuario$:any = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),
            mergeMap( ( action ) => this.usuarioService.getUserById( action.id )),
            mergeMap( async (user:any) => usuariosActions.cargarUsuarioSuccess({ usuario: user})),
            catchError( err => of(usuariosActions.cargarUsuarioError({ payload: err})))
          )
    );
};