import React from 'react';
import s from './Post.module.css';
import { AiOutlineLike } from 'react-icons/ai';

function Post(props: { post: string | null; likeCount: number }) {
  console.log(props);
  return (
    <div className={s.post}>
      <span className={s.text}>{props.post}  </span>
      <div className={s.likeDislike}> <AiOutlineLike className={s.icon}/> {props.likeCount}</div>
     
    </div>
  );
}

export default Post;