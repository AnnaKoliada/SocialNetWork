import React from 'react';
import s from './Message.module.css';

function Message(props: { message: string }) {

  return (<div className={s.message}>
    {props.message}
  </div>

  );
}

export default Message;