import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isLogado,
  ...rest
}) {
  const { logado } = store.getState().auth;

  if (!logado && isPrivate) {
    return <Redirect to="/" />;
  }

  if (logado && isLogado) {
    return <Redirect to="/usuarios" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
          <Component {...props} />
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isLogado: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isLogado: false,
};
