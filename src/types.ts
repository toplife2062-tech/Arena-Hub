export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

export interface ClubNews {
  id: string;
  title: string;
  date: string;
  summary: string;
}
