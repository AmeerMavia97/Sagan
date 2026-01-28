import api from "../lib/axios";

export const comingSoonForm = async (data) => {
  try {
    const response = await api.post("/early-access", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
