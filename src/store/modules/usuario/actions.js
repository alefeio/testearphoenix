export function updatePerfilRequest(data) {
  return {
    type: '@usuario/UPDATE_PERFIL_REQUEST',
    payload: { data },
  };
}

export function detelePerfilRequest(data) {
  return {
    type: '@usuario/DELETE_PERFIL_REQUEST',
    payload: { data },
  };
}

export function updateUsuarioRequest(id, data) {
  return {
    type: '@usuario/UPDATE_USUARIO_REQUEST',
    payload: { id, data },
  };
}

export function updatePerfilSucesso(perfil) {
  return {
    type: '@usuario/UPDATE_PERFIL_SUCESSO',
    payload: { perfil },
  };
}

export function updateUsuarioSucesso(id, data) {
  return {
    type: '@usuario/UPDATE_USUARIO_SUCESSO',
    payload: { id, data },
  };
}

export function detelePerfilSucesso(data) {
  return {
    type: '@usuario/DELETE_PERFIL_SUCESSO',
    payload: data,
  };
}

export function updatePerfilFalha() {
  return {
    type: '@usuario/UPDATE_PERFIL_FALHA',
  };
}
