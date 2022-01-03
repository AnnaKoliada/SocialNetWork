import React from 'react';
import { IUser } from '../../../interface';
import s from './User.module.css';
import userFoto from '../../../assets/images/no-foto.png';

interface Props {
  unfollow: (arg0: number) => void;
  follow: (arg0: number) => void;
  user: IUser;
}

const User = function (props: Props): JSX.Element {
  return (
    <div className={s.content}>
      <div className={s.infoFoto}>
        <div className={s.foto}>
          <img src={props.user.photos.small !== null ? props.user.photos.small : userFoto} alt="avatar"></img>
        </div>
        <div className={s.followed}>
          {props.user.followed ? (
            <button onClick={() => props.unfollow(props.user.id)}>Unfollowed</button>
          ) : (
            <button onClick={() => props.follow(props.user.id)}>Followed</button>
          )}
        </div>
      </div>
      <div className={s.about}>
        <div className={s.info}>
          <span>Name: </span> {props.user.name}
        </div>
        <div className={s.info}>
          <span>Last name: </span>
          {/* {props.user.lastName} */}
        </div>
        <div className={s.info}>
          {/* <span>City: </span> {props.user.location.city} */}
        </div>

        <div className={s.info}>
          <span>Country: </span>
          {/* {props.user.location.country} */}
        </div>
      </div>
    </div>
  );
};

export default User;
