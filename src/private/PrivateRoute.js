import React from 'react';
import PropTypes from 'prop-types';
import { decodeToken } from "react-jwt";
import { Route, Redirect } from 'react-router-dom';

export const RoutesPrivate = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  console.log('token :', token);
  const myDecodedToken = decodeToken(token);
  console.log('myDecodedToken :', myDecodedToken);
  return (
    <Route
      {...rest}
      render={(props) => myDecodedToken
        ? <Component {...rest} />
        : <Redirect to={{ pathname: "/", state: { from: props.location } } }/>
      }
    />
  )
}

RoutesPrivate.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}
