import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Usuarios from '../pages/Usuarios';
import InserirUsuario from '../pages/Usuarios/Inserir';
import EditarUsuario from '../pages/Usuarios/Editar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Usuarios} />
      <Route path="/inserir" exact component={InserirUsuario} />
      <Route path="/editar/:id" exact component={EditarUsuario} />
    </Switch>
  );
}
