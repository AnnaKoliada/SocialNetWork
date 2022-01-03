import React from 'react';
import s from './ProfileInfoData.module.css';

function ProfileInfoData() {
  return (
    <div className={s.content}>
        <div>Name: </div>
        <div>Surname: </div>
        <div>Data of birth: </div>
      </div>
   

  );
}

export default ProfileInfoData;