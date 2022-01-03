import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import userFoto from '../../assets/images/no-foto.png';

function Header(props: any) {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to="/profile">SN</NavLink>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.foto}>
            {props.avatar ? (
              <img src={props.avatar} alt="ava" />
            ) : (
              <img src={userFoto} alt="ava" />
            )}
            <div className={s.name}>{props.login}</div>
          </div>
        ) : (
          <div className={s.login}>
            <NavLink to="/login">LOGIN</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
