import { useState, type ReactNode } from 'react';
import { UserContext } from './UserContext';
import type { User } from '../types/elements-pages';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const registroLocal = localStorage.getItem("enredat-user");
    if (registroLocal) {
      try {
        return JSON.parse(registroLocal) as User;
      } catch {
        return null;
      }
    }
    return null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
