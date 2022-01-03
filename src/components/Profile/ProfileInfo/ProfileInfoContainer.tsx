import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoData from './ProfileInfoData/ProfileInfoData';

function ProfileInfo() {
  return (
    <div className={s.content}>
      <div >
        <img src="" alt="avatar" />
      </div>
      <div>
      <ProfileInfoData />
      </div>
    </div>

  );
}

export default ProfileInfo;