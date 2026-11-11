import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Demo initial state: null user (Guest). Phase 6 me real JWT login aayega.
  const [user, setUser] = useState(null);

  // Live evaluation demo ke liye instant role switcher
  const switchRole = (role) => {
    if (role === 'guest') {
      setUser(null);
    } else if (role === 'student') {
      setUser({
        id: 'std_101',
        name: 'Megha Chanchal',
        email: 'megha.student@campus.edu',
        role: 'student',
      });
    } else if (role === 'admin') {
      setUser({
        id: 'adm_001',
        name: 'Prof. S. K. Verma',
        email: 'admin.events@campus.edu',
        role: 'admin',
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, switchRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}