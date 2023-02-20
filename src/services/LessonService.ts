import axios from "axios";

import type { ApiOutput } from "@/models/ApiOutput";

export const getLessonsByTech = async (
  tech?: string,

  nav?: number
): Promise<ApiOutput | null> => {
  const response = await axios
    .get(
      `https://backend.al1.groupe9.jbienvenu.fr/api/lesson/?${
        tech ? "&tech=" + tech : ""
      }${nav ? "&nav=" + nav : ""}`
    )
    .catch(() => null);

  if (response) {
    console.log(response.data);
    return response.data;
  }
  return response;
};

export const getPracticesByTech = async (
  tech?: string,
  nav?: number
): Promise<ApiOutput | null> => {
  const response = await axios
    .get(
      `https://backend.al1.groupe9.jbienvenu.fr/api/practice/?${
        tech ? "&tech=" + tech : ""
      }${nav ? "&nav=" + nav : ""}`
    )
    .catch(() => null);

  if (response) {
    console.log(response.data);
    return response.data;
  }
  return response;
};
