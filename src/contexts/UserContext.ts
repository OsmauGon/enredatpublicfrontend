// src/contexts/UserContext.ts
import { createContext } from 'react';
import type { User } from '../types/elements-pages';

export type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
