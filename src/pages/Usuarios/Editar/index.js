import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';

import { updateUsuarioRequest } from '~/store/modules/usuario/actions';

import { Container, Prod, Barra, Titulo } from './styles';

const options = [
  { id: 1, title: 'Administrador' },
  { id: 2, title: 'Colaborador' },
  { id: 3, title: 'Gerente' },
];

export default function EditarUsuario(props) {
  const dispatch = useDispatch();

  const id = parseInt(props.match.params.id);

  const perfil = useSelector((state) => state.usuario.perfil[id]);

  function handleSubmit(data) {
    dispatch(updateUsuarioRequest(id, data));
  }

  useEffect(() => {
    console.log('Perfil: ', perfil);
  }, []);

  return (
    <Container>
      <Barra>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/inserir">Inserir usuário</Link>
          </li>
        </ul>
      </Barra>
      <Titulo>Editar usuário: {perfil.nome}</Titulo>
      <Prod>
        <Form initialData={perfil} onSubmit={handleSubmit}>
          <label>Id</label>
          <Input name="id" placeholder="Id" />
          <label>Nome</label>
          <Input name="nome" placeholder="Nome" />
          <label>Email</label>
          <Input name="email" type="email" placeholder="E-mail" />
          <label>Senha</label>
          <Input type="password" name="senha" placeholder="Nova senha" />
          <label>Repita a senha (apenas se quiser alterar)</label>
          <Input
            type="password"
            name="confirmSenha"
            placeholder="Confirmação da senha"
          />

          <label>Data de nascimento</label>
          <Input name="nascimento" placeholder="Nascimento" />

          <label>Tipo</label>
          <Select name="tipo" options={options} />

          <button type="submit">Editar usuário</button>
        </Form>
      </Prod>
    </Container>
  );
}
