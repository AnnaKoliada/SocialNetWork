import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import axios from 'axios';
import { IAuth } from '../../interface';
import { setAuthUserData } from '../../redux/auth-Reducer';

interface Props extends RouteComponentProps {
  isFetching: boolean;
  setAuthUserData:( )=> void;
}

class HeaderContainer extends React.Component<Props>{
  componentDidMount(): void {
    this.props.setAuthUserData();
  }

  render() {
    return ( <Header { ...this.props } />);
    
  }
}
const mapStateToProps = (state: { authReducer: IAuth } ) => {
  return { 
    login: state.authReducer.data.login,
    isAuth: state.authReducer.isAuth,
    id: state.authReducer.data.id,
  };
};

// connect(mapStateToProps)(HeaderContainerAPI);

export default connect(mapStateToProps, { setAuthUserData } )(HeaderContainer);
