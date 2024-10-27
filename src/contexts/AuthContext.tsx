import React, { createContext, useContext, useState } from 'react';
import { User, AuthContextType } from '../types';

// Mock user data - In production, this would come from your backend
const mockUser: User = {
  id: '1',
  username: 'johndoe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  bio: 'Content creator passionate about technology',
  joinDate: '2024-01-01',
  subscribers: 1200
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(mockUser);
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (email: string, password: string, username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ ...mockUser, email, username });
    } catch (err) {
      setError('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}