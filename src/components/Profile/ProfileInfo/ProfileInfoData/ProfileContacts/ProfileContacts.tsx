import React from 'react';
import { Link } from 'react-router-dom';
import s from './ProfileContacts.module.css';


function ProfileContacts(props: any) {
  console.log('ProfileContacts', props);
  return (
    props.contact ? (
   <Link to={props.contact}>
            <div className={s.iconFrame}>
              {/* <props.icon className={s.icon} /> */}
            </div>
  </Link>
    ) : null
  );
       
   
}

export default ProfileContacts;

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
