import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAuthUserAvatar, setAuthUserData } from '../../redux/auth-Reducer';
import { IAuth } from '../../interface';

interface Props extends RouteComponentProps {
  isFetching: boolean;
  setAuthUserData:( data: IAuth )=> { data: IAuth };
  setAuthUserAvatar:( avatar:any )=> { avatar:any };
}

class HeaderContainer extends React.Component<Props>{
  componentDidMount(): void {
    console.log('jkkj');
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((response: { data: IAuth }) => {
        console.log(response);
        if (response.data.resultCode === 0){
          this.props.setAuthUserData(response.data);
          const id = response.data.data.id;
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then((res) => {
              console.log(res);
              this.props.setAuthUserAvatar(res.data.photos.small);
            });
        }
      });
  }

  render() {
    console.log('jjj');
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

export default connect(mapStateToProps, { setAuthUserData, setAuthUserAvatar })(HeaderContainer);
