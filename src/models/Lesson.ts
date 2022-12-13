export interface Lesson {
  id: string;
  tech: string;
  isPractice: boolean;
  title: string;
  description?: string;
  image?: string;
  lastUpdated?: string;
  timeToRead?: string;
}
