
import { connect } from 'react-redux';
import { IPost } from '../../../interface';
import { addPostActionCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state: { profilePage: { posts: IPost[]; newPostText: any; }; }) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch: (arg0: { type: string; newText?: any; }) => void ) => {
  return {
    onChangeNewPost(value: string) {
      dispatch(updateNewPostTextCreator(value));
    },

    addNewPost() {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
// function MyPostsContainer(props) {

//   console.log(props)
//   let state = props.store.getState()

//   const onChangeNewPost = (value) => {
//     props.store.dispatch(updateNewPostTextCreator(value))
//   }

//   const addNewPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }

//   return (<MyPosts state={state} onChangeNewPost={onChangeNewPost} addNewPost={addNewPost} />
//   );
// }

export default MyPostsContainer;