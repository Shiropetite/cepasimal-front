import axios from "axios";

import type { ApiOutput } from "@/models/ApiOutput";

export const getLessonsByTech = async (
  tech?: string,
  nav?: number
): Promise<ApiOutput> => {
  const response = await axios.get(
    `http://localhost:3000/api/lesson/?${tech ? "&tech=" + tech : ""}${
      nav ? "&nav=" + nav : ""
    }`
  );
  if (response.data) {
    console.log(response.data);
    return response.data;
  }
  return Promise.reject([]);
};

export const getPracticesByTech = async (
  tech?: string,
  nav?: number
): Promise<ApiOutput> => {
  const response = await axios.get(
    `http://localhost:3000/api/practice/?${tech ? "&tech=" + tech : ""}${
      nav ? "&nav=" + nav : ""
    }`
  );
  if (response.data) {
    console.log(response.data);
    return response.data;
  }
  return Promise.reject([]);
};
