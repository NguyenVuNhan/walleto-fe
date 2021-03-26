interface BaseBody<T = any> {
  data: T;
  message: string;
  success: boolean;
}

interface BasePayload {
  [key: string]: unknown;
}

interface BaseError {
  msg: string;
  errors?: {
    [key: string]: string;
  };
}

interface BaseRequestAction<T = string> {
  type: T;
}

interface BaseSuccessAction<T = string, P = BasePayload> {
  type: T;
  payload: P;
}

interface BaseFailureAction<T = string, E = BaseError> {
  type: T;
  error?: E;
}
