import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileData, setUserProfileData } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { IUserData } from '../../interface';
import { updateIsFetching } from '../../redux/commonReducer';
import { profileAPI } from '../../api/api';

interface Props {
  userData: IUserData,
  isFetching: boolean,
  setUserProfileData: any,
  updateIsFetching: any,
  getUserProfileData: any,
}

class ProfileComponent extends React.Component<any>{
  
  componentDidMount(): void {
    const params = this.props.match.params;
    let userId;
    if (params) userId = params.userId;
    if (!userId) userId = 21451;
    this.props.getUserProfileData(userId);
     
  }

  render(){
    return (
    <Profile userData={this.props.userData} {...this.props}/>
    );
  }

}

const mapStateToProps = (state: any) =>{
  return {
    userData: state.profilePage.userData,
    isFetching: state.commonReducer.isFetching,
  };
};

const WithRouterProfileComponent = withRouter(ProfileComponent);

export default connect(mapStateToProps, { getUserProfileData })(WithRouterProfileComponent);
