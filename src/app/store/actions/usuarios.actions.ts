import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] cargarUsuarios');

export const cargarUsuariosSuccess = createAction(
    '[Usuarios] cargarUsuarios Success'
    ,props<{ usuarios: Usuario[]}>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] cargarUsuarios Error'
    ,props<{ payload: any }>()
);