import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props: { id: number; name: string }) {
  const path = '/dialogs/' + props.id;
  return (
    <div>
      <NavLink to={path} className={s.dialog} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
}

export default DialogItem;
