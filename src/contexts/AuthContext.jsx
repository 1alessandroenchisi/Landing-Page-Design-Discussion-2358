import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserId } from '../utils/userUtils';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user data - in production, this would come from your backend
  const mockUsers = {
    'admin@dunebeach.com': {
      id: 'admin-001',
      email: 'admin@dunebeach.com',
      name: 'Alessandro Enchisi',
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      permissions: ['manage_users', 'view_analytics', 'manage_properties', 'manage_content']
    },
    'agent@dunebeach.com': {
      id: 'agent-001',
      email: 'agent@dunebeach.com',
      name: 'Maria Santos',
      role: 'agent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      permissions: ['view_analytics', 'manage_properties', 'contact_clients']
    },
    'client@dunebeach.com': {
      id: 'client-001',
      email: 'client@dunebeach.com',
      name: 'João Silva',
      role: 'client',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      permissions: ['view_properties', 'contact_agent']
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('dune_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('dune_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers[email];
    if (foundUser && password === 'demo123') {
      const userWithToken = {
        ...foundUser,
        token: `token-${Date.now()}`,
        lastLogin: new Date().toISOString()
      };
      
      setUser(userWithToken);
      localStorage.setItem('dune_user', JSON.stringify(userWithToken));
      setIsLoading(false);
      return { success: true };
    }
    
    setIsLoading(false);
    return { success: false, error: 'Credenciais inválidas' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dune_user');
  };

  const hasPermission = (permission) => {
    return user?.permissions?.includes(permission) || false;
  };

  const isRole = (role) => {
    return user?.role === role;
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    hasPermission,
    isRole,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};