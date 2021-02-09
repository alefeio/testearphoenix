import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';

import { updatePerfilRequest } from '~/store/modules/usuario/actions';

import { Container, Prod, Barra } from './styles';

const options = [
  { id: 1, title: 'Administrador' },
  { id: 2, title: 'Colaborador' },
  { id: 3, title: 'Gerente' },
];

export default function InserirUsuario() {
  const dispatch = useDispatch();

  const perfil = useSelector((state) => state.usuario.perfil);

  function handleSubmit(data) {
    dispatch(updatePerfilRequest(data));
  }

  return (
    <Container>
      <Barra>
        <ul>
          <li>
            <Link to="/usuarios">Home</Link>
          </li>
        </ul>
      </Barra>
      <Prod>
        <Form initialData={perfil} onSubmit={handleSubmit}>
          <Input name="nome" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input type="password" name="senha" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmSenha"
            placeholder="Confirmação da senha"
          />

          <Input name="nascimento" placeholder="Nascimento" />

          <Select name="tipo" options={options} />

          <button type="submit">Inserir usuário</button>
        </Form>
      </Prod>
    </Container>
  );
}
