import React  from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { IDialog, IMessage } from '../../interface';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

interface Props {
  onChangeNewMessage : (e: string)=>void;
  addNewMessage: ()=>void;
  newMessageBody: string;
  dialogs: IDialog[];
  messages: IMessage[];
}

const Dialogs = function ( props: Props) {
  function onChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.onChangeNewMessage(e.target.value);
  }
  const addMessage = () => {
    props.addNewMessage();
  };

  return (
    <div className={s.content}>
      <div className={s.dialogsItems}>
        {props.dialogs.map((el: IDialog) => <DialogItem key={el.id} name={el.name} id={el.id} />)}
      </div>
      <div className={s.messages}>
        {props.messages.map((el: IMessage) => <Message key={el.id} message={el.message} />)}
      </div>
      <div className={s.newMessage}>
        <textarea onChange={(e) => onChangeTextarea(e)} value={props.newMessageBody} />
        <button><AiOutlineSend className={s.icon} onClick={addMessage} /></button>
      </div>
    </div>

  );
};

export default Dialogs;
