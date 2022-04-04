declare global {
  interface Window {
    playlists: Playlist[];
    videos: Video[];
  }
}

export interface Video {
  id: number;
  name: string;
  duration?: number;
  description?: string;
  dateCreated: string;
  thumbnail?: string;
}

export interface Playlist {
  id: number;
  name: string;
  description: string;
  videoIds: number[];
  dateCreated: string;
}

export {};
