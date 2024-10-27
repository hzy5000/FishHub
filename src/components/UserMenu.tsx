import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-100 rounded-full p-1"
      >
        <img
          src={user.avatar}
          alt={user.username}
          className="w-8 h-8 rounded-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b">
            <p className="font-medium">{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              // Handle profile click
            }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Profile
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              // Handle settings click
            }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>

          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-red-600"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}