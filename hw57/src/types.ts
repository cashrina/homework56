export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: number;
}

export interface UserMutation {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
}