export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  username: string;
  email: string;
};

export type login = {
  loginToken: string | null;
};

export type signup = {
  createUser: User;
};

export type loginVariables = {
  email: string;
  password: string;
};

export type signupVariables = {
  email: string;
  username: string;
};
