// src/contexts/UserProvider.tsx
import { useState, type ReactNode } from 'react';
import { UserContext } from './UserContext';
import type { User } from '../types/elements-pages';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
