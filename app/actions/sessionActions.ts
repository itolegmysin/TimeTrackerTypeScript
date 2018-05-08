import { User } from 'firebase';

export interface UserState {
  authUser: User;
}

export const AUTH_USER_SET = 'user/SET';
type AUTH_USER_SET = typeof AUTH_USER_SET;

export interface SetAction {
  type: AUTH_USER_SET;
  payload: User;
}

export type UserAction = SetAction;

export const setUser = (payload: User): SetAction => ({
  type: AUTH_USER_SET,
  payload
});
