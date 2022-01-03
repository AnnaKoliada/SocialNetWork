import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import Loader from '../Common/Loader/Loader';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileData } from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { IUserData } from '../../interface';
import { updateIsFetching } from '../../redux/fetchingReducer';

interface Props {
  userData: IUserData,
  isFetching: boolean,
  setUserProfileData: any,
  updateIsFetching: any,
}

class ProfileComponent extends React.Component<any>{
  
  componentDidMount(): void {
    console.log('componentDidMount');
   
    const params = this.props.match.params;
    let userId;
    if (params) userId = params.userId;
    if (!userId) userId = 21451;
    this.props.updateIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId,
    )
      .then((response) => {
        console.log(response.data);
        
        this.props.setUserProfileData(response.data);
        this.props.updateIsFetching(false);
      });
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
    isFetching: state.isFetching.isFetching,
  };
};

const WithRouterProfileComponent = withRouter(ProfileComponent);

export default connect(mapStateToProps, { setUserProfileData, updateIsFetching })(WithRouterProfileComponent);
