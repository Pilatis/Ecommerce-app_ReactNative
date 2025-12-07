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
    createUser: (data: CreateUserData) => Promise<'success' | 'failure'>;
    login: (data: LoginData) => Promise<'success' | 'failure'>;
    logout: () => void;
    loadingLogout: boolean;
}