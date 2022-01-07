import React from 'react';
import { IUser, IUserPage } from '../../interface';
import s from './Users.module.css';
import userFoto from '../../assets/images/no-foto.png';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props extends IUserPage {
  updatePageSize: (number: number) => void;
  setCurrentPage: (number: number | string, pagesCount: number | null ) => void;
  setPageSize: (number: number) => void;
  unFollow: (arg0: number) => void;
  follow: (arg0: number) => void;
  isDisabledFollowing: [] | number[];
}

const Users = (props: Props): JSX.Element => {
  let pagesCount: number | null;
  const pages: string[] | number[] = [];
  if (props.totalCount) {
    pagesCount = Math.ceil(props.totalCount / props.pageSize);
    if (props.currentPage === pagesCount || props.currentPage >= pagesCount - 4) {
      pages[0] = '<';
      pages[1] = props.currentPage - 4;
      pages[2] = props.currentPage - 3;
      pages[3] = props.currentPage - 2;
      pages[4] = props.currentPage - 1;
      pages[5] = props.currentPage;
      pages[6] = '...';
      pages[7] = pagesCount;
      pages[8] = '>';
    } else {
      pages[0] = '<';
      pages[1] = props.currentPage;
      pages[2] = props.currentPage + 1;
      pages[3] = props.currentPage + 2;
      pages[4] = props.currentPage + 3;
      pages[5] = props.currentPage + 4;
      pages[6] = '...';
      pages[7] = pagesCount;
      pages[8] = '>';
    } 
  }
  return (
    <div className={s.content}>
     {props.users.map((u: IUser) => {
       return (
          <div key={u.id} className={s.contentUser}>
            <div className={s.infoFoto}>
              <div className={s.foto}>
              <NavLink to={'profile/' + u.id} > 
              <img src={u.photos.small !== null ? u.photos.small : userFoto} alt="avatar"></img>
               </NavLink> 
              </div>
              <div className={s.followed}>
                   {u.followed ? (
                 
                  <button disabled={props.isDisabledFollowing.some((id: number)=> id === u.id)} onClick={() => {
                    props.unFollow(u.id);
                  }}>Unfollowed</button>
                   ) : (
                  <button disabled={props.isDisabledFollowing.some((id: number)=>id === u.id)} onClick={() =>{props.follow(u.id);}}>Followed</button>
                   )}
              </div>
            </div>
            <div className={s.about}>
              <div className={s.info}>
                <span>Name: </span> {u.name}
              </div>
              <div className={s.info}>
                <span>Last name: </span>
              </div>
              <div className={s.info}></div>

              <div className={s.info}>
                <span>Country: </span>
              </div>
            </div>
          </div>
       );
     })}
      <div className={s.paginator}>
        {pages.map((el, i) => {
          return (
            <button
              onClick={() => props.setCurrentPage(el, pagesCount)}
              className={cn({
                [s.currentPage]: props.currentPage == el,
              })}
              key={i}
            >
              {el}
            </button>
          );
        })}
        <select
          value={String(props.pageSize)}
          onChange={(e) => {
            props.setPageSize(+e.target.value);
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="100">100</option>
        </select>
      </div>
      
    </div>
  );
};
export default Users;
