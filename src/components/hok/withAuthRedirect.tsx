
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

interface Props { isAuth: boolean; }


const mapStateToPropsForRedirect = (state: { authReducer: { isAuth: any; }; }) => ({
  isAuth: state.authReducer.isAuth,
});

export const withAuthRedirect = (Component: any ) => {
  class RedirectComponent extends React.Component<Props>{

    render(): any {
      if (!this.props.isAuth) return (<Redirect to= '/login' />);
      return <Component { ...this.props } /> ;
    }

  }
  const ConnectedwithAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedwithAuthRedirect;
};
