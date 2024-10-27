import React, { useRef, useEffect } from 'react';
import { X, ThumbsUp, MessageSquare, Share2, Volume2, Maximize2 } from 'lucide-react';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

export default function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col bg-white rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold line-clamp-1">{video.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative bg-black aspect-video">
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full"
            controls
            autoPlay
            poster={video.thumbnail}
          />
          
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={() => videoRef.current?.requestPictureInPicture()}
              className="p-2 bg-black/50 hover:bg-black/75 rounded-full text-white"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <button 
              onClick={handleFullscreen}
              className="p-2 bg-black/50 hover:bg-black/75 rounded-full text-white"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">
                {video.views.toLocaleString()} views • {video.date}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-full">
                <ThumbsUp className="w-5 h-5" />
                <span>{video.likes.toLocaleString()}</span>
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-full">
                <MessageSquare className="w-5 h-5" />
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-full">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600 whitespace-pre-wrap">
              {video.description || 'No description available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}