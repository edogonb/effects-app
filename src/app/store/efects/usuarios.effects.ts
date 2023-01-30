import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions";
import { cargarUsuariosSuccess } from "../actions";




@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) { }

    // cargarUsuarios$:any = createEffect(
    //     () => this.actions$
    //         .pipe(
    //             ofType(usuariosActions.cargarUsuarios),
    //             tap( data => console.log ('effect tap ',data)),
    //             mergeMap(
    //                 () => this.usuarioService.getUsers()
    //                     .pipe(
    //                         tap (data => console.log('getUsers effect',data) )
    //                     )
    //             )
    //         )
    // );

    // cargarUsuarios$:any = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(usuariosActions.cargarUsuarios),
    //         tap( data => console.log(data)),
    //         mergeMap(
    //             () =>this.usuarioService.getUsers()
    //             .pipe(
    //                 tap(data => console.log('getUsers effect',data))
    //             )),
    //         mergeMap( async (users:any) => usuariosActions.cargarUsuariosSuccess({ usuarios: users }))
    //       )
    // );


    cargarUsuarios$:any = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            mergeMap( () =>this.usuarioService.getUsers() ),
            mergeMap( async (users:any) => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
            catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err})))
          )
    );


};