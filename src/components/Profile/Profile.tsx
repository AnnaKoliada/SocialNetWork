import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { IUserData } from '../../interface';
import Loader from '../Common/Loader/Loader';

function Profile(props: any) {
  console.log(props);
  return (
    <div className={s.content}>
     { props.isFetching ? (
    <Loader />
     ) : (
    <ProfileInfo  {...props}/>
     )}
      <MyPostsContainer />
    </div>

  );
}

export default Profile;