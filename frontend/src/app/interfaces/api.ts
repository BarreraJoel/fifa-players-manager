export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiValidationError {
  success: false;
  message: string;
  errors?: ApiFieldError[];
}

export interface ApiFieldError {
  type: string,
  msg: string,
  path: string
}

export interface ApiError {
  success: false;
  message: string;
}