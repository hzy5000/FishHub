import React, { useState } from 'react';
import { Search, Bell, Upload, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './UserMenu';
import AuthModal from './AuthModal';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <header className="h-16 fixed top-0 right-0 left-0 lg:left-64 bg-white border-b border-gray-200 px-6 flex items-center justify-between z-10">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
          
          {user ? (
            <>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Upload className="w-5 h-5" />
                <span className="hidden sm:inline">Upload</span>
              </button>
              <UserMenu />
            </>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Sign In
            </button>
          )}
          
          <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
}