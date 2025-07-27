import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import LocalStorage from "./LocalStorage";
import { TOKEN } from "@/constants/index";

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/v1/`;
console.log({ baseUrl });
const baseQuery = fetchBaseQuery({
   baseUrl: baseUrl,
   prepareHeaders: (headers, {}) => {
      const token = LocalStorage.get(TOKEN);
      if (token) {
         headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");

      return headers;
   }
});

export { baseQuery, baseUrl };
