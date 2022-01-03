import React from 'react';
import { connect } from 'react-redux';
import { IUser, IUserPage } from '../../interface';
import { follow, setUsers, unfollow, updateCurrentPage, updatePageSize, updateTotalCount } from '../../redux/usersReducer';
import axios from 'axios';
import Loader from '../Common/Loader/Loader';
import UsersAPIComponent from './Users';
import { updateIsFetching } from '../../redux/fetchingReducer';

interface Props extends IUserPage  {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (users: IUser[]) => void;
  updatePageSize: (number: number) => void;
  updateTotalCount: (number: number) => void;
  updateCurrentPage: (number: number) => void;
  updateIsFetching: (isFetching: boolean) => void;
  isFetching: boolean;
}

class Users extends React.Component<Props> {
  componentDidMount(): void {
    this.props.updateIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.updatePageSize}`,
      )
      .then((response) => {
        this.props.updateIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.updateTotalCount(response.data.totalCount);
        console.log(this.props.pageSize);
      });
  }

  setCurrentPage = (el: number | string, pagesCount: number | null): void => {
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
    this.props.updateIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.updateIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  setPageSize = (el: number): void => {
    this.props.updatePageSize(el);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSize}&count=${el}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return this.props.isFetching ? (
      <Loader />
    ) : (
      <UsersAPIComponent
        {...this.props}
        setCurrentPage={this.setCurrentPage}
        setPageSize={this.setPageSize}
      />
    );
  }
}

const mapStateToProps = (state: {
  usersPage: IUserPage;
  isFetching: { isFetching: boolean };
}) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching:  state.isFetching.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  updatePageSize,
  updateTotalCount,
  updateCurrentPage,
  updateIsFetching,
})(Users);
export default UsersContainer;


