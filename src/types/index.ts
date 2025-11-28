export interface Coach {
  id: string;
  name: string;
  avatar: string;
  specialization: string[];
  category: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  bio: string;
  languages: string[];
  availability: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  thumbnail: string;
  rating: number;
  students: number;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  thumbnail: string;
  category: string;
  readTime: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  thumbnail: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  thumbnail: string;
  tags: string[];
  readTime: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  replies: number;
  views: number;
  category: string;
}

export interface UserProfile {
  id: string;
  username: string;
  avatar: string;
  bio: string;
  joinDate: string;
  rank: string;
  posts: number;
  reputation: number;
  games: string[];
}

export interface EsportsPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}
