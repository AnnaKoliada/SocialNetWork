import axios from 'axios';
import { IAuth, IFollow, IUsers } from '../interface';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '26b2348b-e1d0-47ae-99d2-b2daa05563d8',
  },
});

export const userAPI = {
  async getUsers(pageSize: string | number, count:  number | ((number: number) => void)): Promise<IUsers> {
    const response = instance.get(`users?page=${pageSize}&count=${count}`);
    return (await response).data;
  },
 
};

export const followAPI = {
  async unfollow(id: string | number): Promise<IFollow>{
    const response = instance.delete(`follow/${id}`);
    return (await response).data;
  },
  async follow(id: string | number): Promise<IFollow>{
    const response = instance.post(`follow/${id}`);
    return (await response).data;
  },
};

export const authAPI = {
  async authMe(): Promise<IAuth> {
    const response = instance.get('auth/me');
    return (await response).data;
    
  },
};

export  const profileAPI = {
  async getProfile(id: number | null){
    const response = instance.get(`profile/${id}`);
    return (await response).data;
  },

};