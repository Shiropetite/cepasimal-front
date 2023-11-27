import axios from 'axios';

import type { ApiOutput } from 'src/models/ApiOutput';

export const getLessonsByTech = async (tech?: string, nav?: number): Promise<ApiOutput | null> => {
  const response = await axios
    .get(`http://localhost:3000/api/lesson/?${tech ? '&tech=' + tech : ''}${nav ? '&nav=' + nav : ''}`)
    .catch(() => null);

  if (response) {
    console.log(response.data);
    return response.data;
  }
  return response;
};

export const getPracticesByTech = async (tech?: string, nav?: number): Promise<ApiOutput | null> => {
  const response = await axios
    .get(`http://localhost:3000/api/practice/?${tech ? '&tech=' + tech : ''}${nav ? '&nav=' + nav : ''}`)
    .catch(() => null);

  if (response) {
    console.log(response.data);
    return response.data;
  }
  return response;
};
