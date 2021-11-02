import React from 'react';
import PropTypes from 'prop-types';
import { decodeToken } from "react-jwt";
import { Route, Redirect } from 'react-router-dom';

export const LoginAuth = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  console.log('token :', token);
  const myDecodedToken = decodeToken(token);
  console.log('myDecodedToken :', myDecodedToken);
  return (
    <Route
      {...rest}
      render={(props) => myDecodedToken
        ? <Redirect to={{ pathname: "/dashboard", state: { from: props.location } } }/>
        : <Component {...rest} />
      }
    />
  )
}

LoginAuth.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.func,
}
