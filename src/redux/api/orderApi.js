import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/utils/ApiUrl";

export const orderApi = createApi({
   reducerPath: "orderApi",
   baseQuery: baseQuery,
   endpoints: (builder) => ({
      getOrders: builder.query({
         query: () => "orders/me",
         providesTags: ["order"]
      }),

      getOrderDetails: builder.query({
         query: (id) => `order/${id}`,
         providesTags: (result, error, id) => [{ type: "order", id }]
      }),

      getAdminOrders: builder.query({
         query: () => "admin/orders",
         providesTags: ["adminOrders"]
      }),

      updateOrder: builder.mutation({
         query: ({ id, status }) => ({
            url: `admin/order/${id}`,
            method: "PUT",
            body: { status }
         }),
         invalidatesTags: (result, error, { id }) => [{ type: "order", id }, { type: "adminOrders" }]
      }),

      deleteOrder: builder.mutation({
         query: (id) => ({
            url: `admin/order/${id}`,
            method: "DELETE"
         }),
         invalidatesTags: (result, error, { id }) => [{ type: "order", id }, { type: "adminOrders" }]
      })
   })
});

export const { useGetOrdersQuery, useGetOrderDetailsQuery, useGetAdminOrdersQuery, useDeleteOrderMutation, useUpdateOrderMutation } = orderApi;
