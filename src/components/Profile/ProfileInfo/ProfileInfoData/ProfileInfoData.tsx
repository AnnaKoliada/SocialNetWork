import React from 'react';
import s from './ProfileInfoData.module.css';
import { GrUserWorker } from 'react-icons/gr';
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsFillHandIndexFill,
} from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md';
import cn from 'classnames';
import vk from '../../../../assets/images/vk.png';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import { Link } from 'react-router-dom';

function ProfileInfoData(props: any) {
  return props.userData ? (
    <div className={s.content}>
      <div>{props.userData.fullName}</div>
      <div>{props.userData.aboutMe}</div>
      <div className={s.job}>
        <div
          className={cn(s.iconDiv, s.iconFrame, {
            [s.islooking]: props.userData.lookingForAJob,
          })}
        >
          <GrUserWorker className={s.icon} />
        </div>
        {props.userData.lookingForAJobDescription ? (
          <div className={s.description}>{props.userData.lookingForAJobDescription}</div>
        ) : null}
      </div>
      <div className={s.contacts}>
      {props.userData.contacts.facebook ? (
      <Link to={props.userData.contacts.facebook}>
        <div className={s.iconFrame}>
          <BsFacebook className={s.icon} />
        </div>
      </Link>
      ) : null}
    {props.userData.contacts.website ? (
      <Link to={props.userData.contacts.website}>
        <div className={s.iconFrame}>
          <MdOutlineWeb className={s.icon} />
        </div>
      </Link>
    ) : null}
    {props.userData.contacts.vk ? (
      <Link to={props.userData.contacts.vk}>
        <div className={s.iconFrame}>
          <img src={vk} className={s.icon} />
        </div>
      </Link>
    ) : null}
    {props.userData.contacts.twitter ? (
      <Link to={props.userData.contacts.twitter}>
        <div className={s.iconFrame}>
          <BsTwitter className={s.icon} />
        </div>
      </Link>
    ) : null}
    {props.userData.contacts.instagram ? (
      <Link to={props.userData.contacts.instagram}>
        <div className={s.iconFrame}>
          <BsInstagram className={s.icon} />
        </div>
      </Link>
    ) : null}
    {props.userData.contacts.youtube ? (
      <Link to={props.userData.contacts.youtube}>
        <div className={s.iconFrame}>
          <BsYoutube className={s.icon} />
        </div>
      </Link>
    ) : null}
    {props.userData.contacts.github ? (
      <Link to={props.userData.contacts.github}>
        <div className={s.iconFrame}>
          <BsGithub className={s.icon} />
        </div>
      </Link>
    ) : null}
    {props.userData.contacts.mainLink ? (
      <Link to={props.userData.contacts.mainLink}>
        <div className={s.iconFrame}>
          <BsFillHandIndexFill className={s.icon} />
        </div>
      </Link>
    ) : null} 
    
      </div>
    </div>
  ) : null;
}

export default ProfileInfoData;

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
//  {props.userData.contacts.facebook ? (
//       <Link to={props.userData.contacts.facebook}>
//         <div className={s.iconFrame}>
//           <ProfileContacts className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.website ? (
//       <Link to={props.userData.contacts.website}>
//         <div className={s.iconFrame}>
//           <MdOutlineWeb className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.vk ? (
//       <Link to={props.userData.contacts.vk}>
//         <div className={s.iconFrame}>
//           <img src={vk} className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.twitter ? (
//       <Link to={props.userData.contacts.twitter}>
//         <div className={s.iconFrame}>
//           <BsTwitter className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.instagram ? (
//       <Link to={props.userData.contacts.instagram}>
//         <div className={s.iconFrame}>
//           <BsInstagram className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.youtube ? (
//       <Link to={props.userData.contacts.youtube}>
//         <div className={s.iconFrame}>
//           <BsYoutube className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.github ? (
//       <Link to={props.userData.contacts.github}>
//         <div className={s.iconFrame}>
//           <BsGithub className={s.icon} />
//         </div>
//       </Link>
//     ) : null}
//     {props.userData.contacts.mainLink ? (
//       <Link to={props.userData.contacts.mainLink}>
//         <div className={s.iconFrame}>
//           <BsFillHandIndexFill className={s.icon} />
//         </div>
//       </Link>
//     ) : null} */}