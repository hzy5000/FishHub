import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import VideoPlayer from './components/VideoPlayer';

// Sample video data
const videos = [
  {
    id: 1,
    title: "Morning Meditation for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4", // Example video URL
    duration: "10:15",
    views: 15420,
    date: "2 days ago",
    likes: 1200,
    description: "Start your day with this calming meditation session perfect for beginners. Learn the basics of mindfulness and breathing techniques.",
    userId: "1"
  },
  {
    id: 2,
    title: "Advanced Web Development Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    duration: "25:30",
    views: 42100,
    date: "1 week ago",
    likes: 3500,
    description: "Deep dive into advanced web development concepts including modern JavaScript features and responsive design patterns.",
    userId: "1"
  },
  {
    id: 3,
    title: "Epic Mountain Biking Adventure",
    thumbnail: "https://images.unsplash.com/photo-1618254170799-a0964115584e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    duration: "18:45",
    views: 28900,
    date: "3 days ago",
    likes: 2100,
    description: "Join us on an incredible mountain biking journey through the most scenic trails in the Rocky Mountains.",
    userId: "1"
  },
  {
    id: 4,
    title: "Cooking Masterclass: Italian Cuisine",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    duration: "32:20",
    views: 67300,
    date: "5 days ago",
    likes: 4800,
    description: "Learn authentic Italian cooking techniques from a professional chef. Perfect your pasta-making skills!",
    userId: "1"
  },
  {
    id: 5,
    title: "Digital Art Creation Process",
    thumbnail: "https://images.unsplash.com/photo-1619921975431-bc9b1ec0b3bc?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    duration: "15:50",
    views: 19200,
    date: "1 day ago",
    likes: 1500,
    description: "Watch the complete process of creating digital art from sketch to final piece using professional techniques.",
    userId: "1"
  },
  {
    id: 6,
    title: "Travel Vlog: Hidden Gems in Tokyo",
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    duration: "22:10",
    views: 84600,
    date: "4 days ago",
    likes: 6200,
    description: "Discover the lesser-known spots in Tokyo that most tourists miss. Local insights and secret locations revealed!",
    userId: "1"
  }
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  const handleVideoClick = (videoId: number) => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      setSelectedVideo(video);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Videos</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
                Sort by
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50">
                Filter
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard 
                key={video.id} 
                {...video} 
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>
        </div>
      </main>

      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}

export default App;