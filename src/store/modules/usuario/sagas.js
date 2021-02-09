import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  updatePerfilSucesso,
  updatePerfilFalha,
  detelePerfilSucesso,
} from './actions';

export function* updatePerfil({ payload }) {
  try {
    const { nome, email, senha, confirmSenha, nascimento, tipo } = payload.data;

    var sorteados = [];
    var valorMaximo = 1000000000;

    var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
    while (sorteados.indexOf(sugestao) >= 0) {
      // Enquanto o numero já existir, escolher outro
      sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência

    const id = sugestao;

    if (senha !== confirmSenha) return alert('As senhas não conferem!');

    const perfil = Object.assign({
      id,
      nome,
      email,
      senha,
      nascimento,
      tipo,
    });

    toast.success('Usuário inserido com sucesso!');

    yield put(updatePerfilSucesso(perfil));
  } catch (error) {
    toast.error('Erro ao atualizar o perfil. Tente novamente!');
    yield put(updatePerfilFalha());
  }
}

export function* deletePerfil(payload) {
  try {
    const data = payload;

    alert(payload);

    toast.success(`Usuário ${payload.data} deletado com sucesso!`);

    // yield put(detelePerfilSucesso(data));
  } catch (error) {
    toast.error('Erro ao deletar o usuário. Tente novamente!');
    yield put(updatePerfilFalha());
  }
}

export default all([
  takeLatest('@usuario/UPDATE_PERFIL_REQUEST', updatePerfil),
  takeLatest('@usuario/DELETE_PERFIL_REQUEST', deletePerfil),
]);
