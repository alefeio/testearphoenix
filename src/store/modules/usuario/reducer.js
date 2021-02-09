import produce from 'immer';

const INITIAL_STATE = {
  perfil: [
    {
      id: 1,
      nome: 'Alexandre',
      email: 'alefeio@gmail.com',
      senha: '123456',
      nascimento: '30/11/1983',
      tipo: 1,
    },
    {
      id: 2,
      nome: 'João Antônio',
      email: 'jantonio@gmail.com',
      senha: '123456',
      nascimento: '05/01/1980',
      tipo: 1,
    },
    {
      id: 3,
      nome: 'Fernanda',
      email: 'fernanda@gmail.com',
      senha: '123456',
      nascimento: '20/02/1999',
      tipo: 1,
    },
  ],
};

export default function usuario(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@usuario/UPDATE_PERFIL_SUCESSO': {
        draft.perfil.push(action.payload.perfil);
        break;
      }
      case '@usuario/DELETE_PERFIL_SUCESSO': {
        draft.perfil.splice(action.payload.pos, 1);
        break;
      }
      default:
    }
  });
}
