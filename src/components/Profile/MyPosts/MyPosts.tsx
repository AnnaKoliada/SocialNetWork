import React from 'react';
import { IPost } from '../../../interface';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props: { onChangeNewPost: (arg0: string) => void; addNewPost: () => void; newPostText: string | null; posts: IPost[] | null; }) {


  const onChangeNewPost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    props.onChangeNewPost(value);
  };

  const addNewPost = () => {
    props.addNewPost();
  };

  return (
    <div className={s.myposts}>
      <h4>My Posts</h4>
      <div className={s.newPost}>
        <textarea onChange={(e) => onChangeNewPost(e)} value = {props.newPostText ? props.newPostText : ''} />
        <button onClick={addNewPost}>Add</button>
      </div>
      <div className={s.posts}>
        
        {props.posts?.map((el: IPost) => <Post post={el.post} key={el.id} likeCount={el.likeCount} />)}
      </div>

    </div>

  );
}

export default MyPosts;