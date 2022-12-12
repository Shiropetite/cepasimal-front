import axios from 'axios';

import type { Lesson } from "@/models/Lesson";

export const getLessonsByTech = async (tech: string, nav: number): Promise<Lesson[]> => {
  const response = await axios.get(`http://localhost:3000/lessons/${tech}/${nav}`);
  if (response.data) { 
    console.log(response.data);
    return response.data; 
  }
  return Promise.reject([]);
}

export const getPracticesByTech = async (tech: string, nav: number): Promise<Lesson[]> => {
  const response = await axios.get(`http://localhost:3000/lessons/${tech}/${nav}/practice`);
  if (response.data) { 
    console.log(response.data);
    return response.data; 
  }
  return Promise.reject([]);
}