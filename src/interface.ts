export interface IMessage {
  id: number,
  message: string
}

export interface IDialog {
  id: number,
  name: string
}
export interface IPost {
  id: number,
  post: string | null,
  likeCount: number,
}

export interface IUser {
  id: number,
  name: string,
  followed: boolean,
  photos: {
    large: string,
    small: string,
  }
  status: null
  uniqueUrlName: null
}
export interface IUsers{
  items: IUser[],
  totalCount: number,
  error: null | number,
}
export interface IUserPage{
  users: IUser[] | [];
  totalCount: number | null;
  pageSize: number ;
  currentPage:number;
  // isFetching:boolean;
}
export interface IUserData{
  aboutMe: string,
  contacts: {
    facebook: string | null
    website:string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
  },
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  fullName: string | null,
  userId: number,
  photos: {
    small: string | null,
    large: string | null,
  }
  
}
export interface IAuth {
  resultCode: number | null,
  messages: [] | string[],
  data: {
    id:  number | null,
    email:  string | null,
    login: string | null, 
  },
  isAuth: boolean,
  avatar: string | null,
}
export interface IFollow {
  
  resultCode: number
  messages: string[],
  data: any,
}
export interface ICommon {
  isFetching: boolean,
  isDisabledFollowing: number[] | [],
} 