import React from 'react';
import { connect } from 'react-redux';
import { ICommon, IUser, IUserPage } from '../../interface';
import {
  follow,
  getUsers,
  setUsers,
  unFollow,
  updateCurrentPage,
  updatePageSize,
  updateTotalCount,
} from '../../redux/usersReducer';
import Loader from '../Common/Loader/Loader';
import Users from './Users';
import { updateIsFetching } from '../../redux/commonReducer';
import { userAPI } from '../../api/api';

interface Props extends IUserPage {
  setUsers: (users: IUser[]) => void;
  updatePageSize: (number: number) => void;
  updateTotalCount: (number: number) => void;
  updateCurrentPage: (number: number) => void;
  updateIsFetching: (isFetching: boolean) => void;
  getUsers: any;
  isFetching: boolean;
  unFollow: (arg0: number) => void;
  follow: (arg0: number) => void;
  isDisabledFollowing: [] | number[]
}

class UsersAPIComponent extends React.Component<Props> {
  componentDidMount(): void {
    this.props.getUsers(this.props.currentPage, this.props.updatePageSize);
  }

  setCurrentPage = (el: number | string, pagesCount: number | null ): void => {
   
    if (el == '>') {
      if (this.props.currentPage !== pagesCount) {
        this.props.updateCurrentPage(this.props.currentPage + 1);
      }
    } else if (el == '<') {
      if (this.props.currentPage !== 1) {
        this.props.updateCurrentPage(this.props.currentPage - 1);
      }
    } else if (el == '...') {
      this.props.updateCurrentPage(this.props.currentPage + 10);
    } else this.props.updateCurrentPage(+el);

    this.props.getUsers(el, this.props.pageSize );
  };

  setPageSize = (el: number): void => {
    this.props.updatePageSize(el);
    userAPI.getUsers(this.props.pageSize, el).then((response) => {
      this.props.setUsers(response.items);
    });
  };

  render() {
    return this.props.isFetching ? (
      <Loader />
    ) : (
      <Users
        {...this.props}
        setCurrentPage={this.setCurrentPage}
        setPageSize={this.setPageSize}
        unFollow= {this.props.unFollow} 
        follow= {this.props.follow} 
        isDisabledFollowing ={this.props.isDisabledFollowing}   />
    );
  }
}

const mapStateToProps = (state: { usersPage: IUserPage; commonReducer: ICommon; }) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.commonReducer.isFetching,
    isDisabledFollowing: state.commonReducer.isDisabledFollowing,
  };
};

const UsersContainer = connect(mapStateToProps, {
  setUsers,
  updatePageSize,
  updateTotalCount,
  updateCurrentPage,
  updateIsFetching,
  getUsers,
  unFollow,
  follow,
})(UsersAPIComponent);
export default UsersContainer;
