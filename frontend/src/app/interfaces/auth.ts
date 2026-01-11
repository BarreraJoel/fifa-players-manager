export interface User {
  id: string;
  full_name: string,
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RegisterDto {
  full_name: string,
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    access_token: string;
  };
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export interface MeResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}