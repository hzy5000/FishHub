import React from 'react';
import { Home, FolderOpen, Clock, ThumbsUp, Settings, Play } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: FolderOpen, label: 'Library' },
  { icon: Clock, label: 'History' },
  { icon: ThumbsUp, label: 'Liked' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 p-4 lg:block hidden">
      <div className="flex items-center gap-2 mb-8">
        <Play className="w-8 h-8 text-blue-600" />
        <h1 className="text-xl font-bold">VideoHub</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors
              ${item.active 
                ? 'bg-blue-50 text-blue-600' 
                : 'hover:bg-gray-50 text-gray-700'
              }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}