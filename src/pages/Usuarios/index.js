import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';

import { Container, Barra, ListaProdutos, Banner } from './styles';

import { detelePerfilRequest } from '~/store/modules/usuario/actions';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const dispatch = useDispatch();

  const perf = useSelector((state) => state.usuario);

  async function loadUsuarios() {
    console.log('Perfil: ', perf.perfil);

    setUsuarios(perf.perfil);
  }

  function excUsuario(data) {
    dispatch(detelePerfilRequest(data));
  }

  function editUsuario(data) {
    dispatch(detelePerfilRequest(data));
  }

  useEffect(() => {
    loadUsuarios();
  }, [usuarios]);

  return (
    <Container>
      <Barra>
        <ul>
          <li>
            <Link to="/inserir">Inserir usuário</Link>
          </li>
        </ul>
      </Barra>
      <ListaProdutos>
        {usuarios.map((u, i) => (
          <li key={u.id}>
            <strong>{u.id}</strong>
            <strong>{u.nome}</strong>
            <strong>{u.email}</strong>
            <strong>{u.nascimento}</strong>
            {u.tipo == 1 && <strong>Administrador</strong>}
            {u.tipo == 2 && <strong>Colaborador</strong>}
            {u.tipo == 3 && <strong>Gerente</strong>}
            <button onClick={() => excUsuario(i)}>Editar</button>
            <button onClick={() => editUsuario(i)}>Excluir</button>
          </li>
        ))}
      </ListaProdutos>
    </Container>
  );
}
