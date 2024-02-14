import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FILTER_PRICE } from "@constants/index";
import { baseQuery } from "@utils/ApiUrl";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({
        keyword = "",
        page = 1,
        price = FILTER_PRICE,
        category,
        ratings = null,
      }) => {
        const params = new URLSearchParams({
          ...(keyword && { keyword }),
          page: page.toString(),
          "price[gte]": price[0].toString(),
          "price[lte]": price[1].toString(),
          ...(category && { category }),
          ...(ratings && { "ratings[gte]": ratings.toString() }),
        });

        return { url: `products?${params.toString()}` };
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

    getAdminProducts: builder.query({
      query: () => "admin/products", // Add a query function here
      providesTags: (result, error) => [{ type: "adminProducts" }],
    }),

    createProduct: builder.mutation({
      query: (newProduct) => (
        console.log(newProduct),
        {
        url: "product/new",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: [
        { type: "product", id: "all" },
        { type: "adminProducts" },
      ],
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => (
        console.log(updatedProduct),
        {
        url: `product/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "product", id },
        { type: "adminProducts" },
      ],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "product", id },
        { type: "adminProducts" },
      ],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductDetailsQuery,
  useGetAdminProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
