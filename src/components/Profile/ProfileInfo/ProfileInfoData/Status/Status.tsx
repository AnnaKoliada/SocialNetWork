import React from 'react';
import { Link } from 'react-router-dom';
import s from './Status.module.css';


class Status extends React.Component {

  state = {
    editMode: false,
  };

  editStatus(){
    this.setState({
      editMode: true,
    });
  }

  noeditStatus(){
    this.setState({
      editMode: false,
    });
  }

  render(): React.ReactNode {
   
    return (
      <div>
        {this.state.editMode && <div><input autoFocus={true} onBlur={this.noeditStatus.bind(this)} type='text'  value={'uuuuu'}/></div>}
        {!this.state.editMode && <div onDoubleClick={this.editStatus.bind(this)}>{'uuuuu'}</div>}
      </div>
    );
  }
 
       
   
}

export default Status;

// {
//   "aboutMe": "я круто чувак 1001%",
//   "contacts": {
//     "facebook": "facebook.com",
//     "website": null,
//     "vk": "vk.com/dimych",
//     "twitter": "https://twitter.com/@sdf",
//     "instagram": "instagra.com/sds",
//     "youtube": null,
//     "github": "github.com",
//     "mainLink": null
//   },
//   "lookingForAJob": true,
//   "lookingForAJobDescription": "не ищу, а дурачусь",
//   "fullName": "samurai dimych",
//   "userId": 2,
//   "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//     "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
//   }
// }
