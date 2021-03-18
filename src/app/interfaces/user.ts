
export interface IUserRespond {
  id?: string;
  name?: IName;
  age: number;
  isWorkNow: boolean;
  email: string;
  username?: string;
  gender: 'F' | 'M';
  company?: ICompany;
}

export interface IUser {
  id?: string;
  name: string;
  age: number;
  isWorkNow: boolean;
  email: string;
  username?: string;
  gender: 'F' | 'M';
  company: ICompany;
}

export interface ICompany {
  name?: string;
  years?: number;
}

export interface IName {
  firstName?: string;
  lastName?: string;
}

//interfaz para respuesta api
export interface Response {
  result: string;
  message: string;
}
