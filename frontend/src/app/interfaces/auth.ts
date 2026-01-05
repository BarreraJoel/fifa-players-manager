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

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    access_token: string;
  };
}