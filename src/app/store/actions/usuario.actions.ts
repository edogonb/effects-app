import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] cargarUsuario',
    props<{ id: string}>()
    );

export const cargarUsuarioSuccess = createAction(
    '[Usuario] cargarUsuario Success'
    ,props<{ usuario: Usuario}>()
);

export const cargarUsuarioError = createAction(
    '[Usuario] cargarUsuario Error'
    ,props<{ payload: any }>()
);