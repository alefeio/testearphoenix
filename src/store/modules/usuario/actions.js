export function updatePerfilRequest(data) {
  return {
    type: '@usuario/UPDATE_PERFIL_REQUEST',
    payload: { data },
  };
}

export function updatePerfilSucesso(perfil) {
  return {
    type: '@usuario/UPDATE_PERFIL_SUCESSO',
    payload: { perfil },
  };
}

export function updatePerfilFalha() {
  return {
    type: '@usuario/UPDATE_PERFIL_FALHA',
  };
}

export function detelePerfilRequest(posicao) {
  return {
    type: '@usuario/DELETE_PERFIL_REQUEST',
    payload: posicao,
  };
}

export function detelePerfilSucesso(pos) {
  return {
    type: '@usuario/DELETE_PERFIL_SUCESSO',
    payload: pos,
  };
}
