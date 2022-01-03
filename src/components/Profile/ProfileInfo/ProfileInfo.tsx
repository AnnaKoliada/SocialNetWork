import React from 'react';
import { IUserData } from '../../../interface';
import s from './ProfileInfo.module.css';
import ProfileInfoData from './ProfileInfoData/ProfileInfoData';
import noFoto from '../../../assets/images/no-foto.png';

function ProfileInfo(props: any): JSX.Element {
  console.log(props);
  return (
    <div className={s.content}>
      <div>
        {props.userData ? (
          props.userData.photos.large !== null ? (
            <img src={props.userData.photos.large} alt="avatar" />
          ) : (
            <img src={noFoto} />
          )
        ) : null}
      </div>
      <div className={s.profileInfoData}>
      {props.userData ?  <ProfileInfoData {...props}/> : null}
      </div>
    </div>
  );
}

export default ProfileInfo;
