import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../hok/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state: {
  dialogsPage: { messages: []; dialogs: []; newMessageBody: string };
}) => {
  console.log(state);
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};
const mapDispatchToProps = (dispatch: (arg0: { type: string; body?: string }) => void) => {
  return {
    onChangeNewMessage(value: string) {
      dispatch(updateNewMessageBodyCreator(value));
    },
    addNewMessage() {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs) as React.ComponentType;
