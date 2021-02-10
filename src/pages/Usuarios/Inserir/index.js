import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';

import { updatePerfilRequest } from '~/store/modules/usuario/actions';

import { Container, Prod, Barra, Titulo } from './styles';

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
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Barra>
      <Titulo>Inserir usuário</Titulo>
      <Prod>
        <Form initialData={perfil} onSubmit={handleSubmit}>
          <label>Nome</label>
          <Input name="nome" placeholder="Seu nome" />
          <label>Email</label>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <label>Senha</label>
          <Input type="password" name="senha" placeholder="Digite uma senha" />
          <label>Confirmação de senha</label>
          <Input
            type="password"
            name="confirmSenha"
            placeholder="Repita a senha"
          />

          <label>Data de nascimento</label>
          <Input name="nascimento" placeholder="dd/mm/aaaa" />

          <label>Tipo</label>
          <Select name="tipo" options={options} />

          <button type="submit">Inserir usuário</button>
        </Form>
      </Prod>
    </Container>
  );
}
