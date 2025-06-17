import { useQuery } from "@tanstack/react-query";
import publicAxios from "./apiUrl/publicAxios";

const useFetchData = (endpoint, queryKey, options = {}) => {
  return useQuery({
    queryKey: [queryKey, options.params],
    queryFn: async () => {
      try {
        const response = await publicAxios.get(`/${endpoint}`, {
          params: options.params
        });
        return response.data.data || response.data;
      } catch (err) {
        if (err.response) {
          console.error("Server Error:", err.response.status);
        } else if (err.request) {
          console.error("No response received from server");
        } else {
          console.error("Error:", err.message);
        }
        throw err;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options
  });
};

export const getArticles = (params = {}) => {
  return useFetchData("articles", "articles", {
    params: {
      include: "author,category,tags",
      sort: "-created_at",
      per_page: 8,
      ...params
    }
  });
};

export const getCategories = () => {
  return useFetchData("categories", "categories");
};

export const getTags = () => {
  return useFetchData("tags", "tags");
};

export const getStories = (params = {}) => {
  return useFetchData("stories", "stories", {
    params: {
      sort: "-created_at",
      per_page: 8,
      ...params
    }
  });
};