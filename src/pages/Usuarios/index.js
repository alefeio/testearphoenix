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

    // alert(data);
  }

  function editUsuario(data) {
    dispatch(detelePerfilRequest(data));
  }

  useEffect(() => {
    loadUsuarios();
  }, [perf]);

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
            <span>
              <strong>Id:</strong> {u.id}
            </span>
            <span>
              <strong>Nome:</strong> {u.nome}
            </span>
            <span>
              <strong>Email:</strong> {u.email}
            </span>
            <span>
              <strong>Nascimento:</strong> {u.nascimento}
            </span>
            {u.tipo == 1 && (
              <span>
                <strong>Administrador</strong>
              </span>
            )}
            {u.tipo == 2 && (
              <span>
                <strong>Colaborador</strong>
              </span>
            )}
            {u.tipo == 3 && (
              <span>
                <strong>Gerente</strong>
              </span>
            )}
            <button onClick={() => editUsuario(i)}>Editar</button>
            <button onClick={() => excUsuario(i)}>Excluir</button>
          </li>
        ))}
      </ListaProdutos>
    </Container>
  );
}
