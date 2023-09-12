export interface AppUser {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  photo: string;
  followers?: AppUser[];
}

export interface Post {
  id: string;
  author: AppUser;
  content: string;
  image?: string;
  replies?: Reply[];
  repliesCount: number;
  likesCount: number;
  createdAt: string;
}

export interface Reply {
  id: string;
  author: AppUser;
  content: string;
  likes: number;
  createdAt: string;
}
