// src/lib/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
});

// Example function
export const getUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};
