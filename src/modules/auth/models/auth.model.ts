export interface LoginUser {
  email: string;
  password: string;
}

export interface ResponseUserInfo {
  access_token: string;
}

export interface SignUpUser {
  email: string;
  password: string;
  username: string;
  sex: string;
}
