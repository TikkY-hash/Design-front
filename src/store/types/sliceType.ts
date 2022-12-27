export interface IInitialState {
  id: number;
  admin: boolean;
  token: string | null;
  password: string;
  email: string;
  authLoginError: string | null;
  authRegisterError: string | null;
  isRegister: boolean;
  isAuth: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponce {
  token: string;
}

export interface IUserRegisterResponse {
  id: number;
  email: string;
  password: string;
  admin: boolean;
}

export interface Data {
  tours: Tour[];
}

export interface OndeData {
  tours: Tour;
}

export interface Tour {
  _id?: string;
  name?: string;
  duration?: number;
  maxGroupSize?: number;
  difficulty?: string;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  price?: number;
  summary?: string;
  imageCover?: string;
  images?: any[];
  startDates?: any[];
  secretTour?: boolean;
  owner?: {
    admin?: boolean;
    email?: string;
    password?: string;
    __v?: number;
    _id?: string;
  };
  __v?: number;
}

export interface MainTour {
  status: string;
  data: Data;
}

export interface TourResponse {
  status: string;
  data: {
    tour: Tour;
  };
}
