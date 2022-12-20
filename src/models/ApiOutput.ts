import type { Lesson } from "./Lesson";

export interface ApiOutput {
  count: number;
  pages: number;
  lessons: Lesson[];
}
