// UserTypes.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppDashboardInterface {
  user: User | null;
  setUser: (user: User | null) => void;
}