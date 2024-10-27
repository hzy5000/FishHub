export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  subscribers?: number;
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  date: string;
  userId: string;
  likes: number;
  description?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, username: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}