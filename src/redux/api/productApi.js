import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/`,
    prepareHeaders: (headers, {}) => {
      console.log(headers);
      const token = "hello";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // You can also set other headers here
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
        query: ({ keyword = "", page = 1, price = [0, 25000], category, ratings = "" }) => {
          const params = new URLSearchParams({
            keyword,
            page: page.toString(),
            "price[gte]": price[0].toString(),
            "price[lte]": price[1].toString(),
            category,
            "ratings[gte]": ratings,
          });
          console.log(params.toString());
      
          return { url: `/products?${params.toString()}` };
        },
        providesTags: (result, error, { keyword, page }) => [
          { type: "product", id: keyword || "all" },
          { type: "product", id: `${page}` },
        ],
      }),
      
    getProductDetails: builder.query({
      query: (id) => `product/${id}`,
      providesTags: (result, error, id) => [{ type: "product", id }],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: [{ type: "product", id: "all" }],
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `product/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "product", id }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "product", id }],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
