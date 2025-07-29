export interface CreateUserData {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserDataForm extends CreateUserData {
    confirmPassword: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    createUser: (data: CreateUserData) => Promise<void>;
    login: (data: LoginData) => Promise<void>;
}