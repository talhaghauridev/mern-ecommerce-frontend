import { createApi } from "@reduxjs/toolkit/query/react";
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
      // options: { skip: true },
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/product/new",
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
