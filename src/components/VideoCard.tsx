import React from 'react';
import { Play, Clock, MoreVertical, ThumbsUp } from 'lucide-react';

interface VideoCardProps {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  date: string;
  likes: number;
  onVideoClick: (videoId: number) => void;
}

export default function VideoCard({ 
  id, 
  title, 
  thumbnail, 
  duration, 
  views, 
  date, 
  likes,
  onVideoClick 
}: VideoCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] group cursor-pointer"
      onClick={() => onVideoClick(id)}
    >
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 text-sm rounded">
          {duration}
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg line-clamp-2 flex-1">{title}</h3>
          <button 
            className="p-1 hover:bg-gray-100 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              // Handle menu click
            }}
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{date}</span>
          <span>•</span>
          <span>{views.toLocaleString()} views</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4 text-gray-600" />
            <span>{likes.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}