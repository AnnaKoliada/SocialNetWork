
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi hi' },
    { id: 3, message: 'Hi it is I' },
  ],
  dialogs: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Kostya' },
    { id: 3, name: 'Ksyusha' },
    { id: 4, name: 'Zahar' },
    { id: 5, name: 'Venya' },
  ],
  newMessageBody: '',
};

const dialogReducer = (state = initialState, action: { type: any; body: any; } ) => {
  switch (action?.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: state.newMessageBody }],
        newMessageBody: '',
      };

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body: any) => (
  {
    type: UPDATE_NEW_MESSAGE_BODY,
    body,
  }
);

export default dialogReducer;
