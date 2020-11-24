export interface LoginUser {
  email: string;
  password: string;
}

export interface ResponseTokenInfo {
  access_token: string;
}

export interface ResponseUserInfo {
  email: string;
  username: string;
  usertype?: string;
  joinDate?: string;
  mPoint: number;
  sex: string;
  created?: Date;
}

export interface SignUpUser {
  email: string;
  password: string;
  username: string;
  sex: string;
}
