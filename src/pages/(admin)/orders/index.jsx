import React, { useCallback, useMemo } from "react";
import { MetaData } from "@/components/ui";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TableLoading from "../../../components/TableLoading";
import useFetchOrders from "./hooks/useFetchOrders";
import useDeleteOrder from "./hooks/useDeleteOrder";
import formatDate from "@/utils/formatDate";

const AdminOrders = () => {
   const { orders, isLoading } = useFetchOrders();
   const { deleteOrder, isLoading: isDeleting } = useDeleteOrder();

   const handleDeleteOrder = useCallback(
      (orderId) => {
         deleteOrder(orderId);
      },
      [deleteOrder]
   );

   const columns = useMemo(
      () => [
         {
            field: "id",
            headerName: "Order Id",
            type: "string",
            flex: 1,
            minWidth: 120
         },
         {
            field: "ItemsQty",
            headerName: "Items Qty",
            type: "number",
            flex: 1,
            minWidth: 100,
            align: "center",
            headerAlign: "center"
         },
         {
            field: "status",
            headerName: "Status",
            flex: 1,
            minWidth: 120,
            align: "center",
            headerAlign: "center",
            cellClassName: (params) => {
               return params.value === "Processing" ? "order_status_pending" : "order_status_delivered";
            }
         },
         {
            field: "createdAt",
            headerName: "Created At",
            flex: 1,
            minWidth: 120,
            align: "center",
            headerAlign: "center"
         },
         {
            field: "amount",
            headerName: "Amount",
            type: "number",
            flex: 1,
            minWidth: 120,
            align: "center",
            headerAlign: "center",
            valueFormatter: (value) => `$${value?.toFixed(2) || "0.00"}`
         },
         {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            flex: 1,
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            getActions: (params) => [
               <GridActionsCellItem
                  key="edit"
                  icon={<FaEdit size={18} />}
                  label="Edit"
                  component={Link}
                  to={`/admin/order/${params.id}`}
                  sx={{
                     color: "#222935",
                     "&:hover": {
                        backgroundColor: "rgba(34, 41, 53, 0.1)"
                     }
                  }}
               />,
               <GridActionsCellItem
                  key="delete"
                  icon={<MdDelete size={18} />}
                  label="Delete"
                  onClick={() => handleDeleteOrder(params.id)}
                  disabled={isDeleting}
                  sx={{
                     color: "#222935",
                     "&:hover": {
                        backgroundColor: "rgba(220, 53, 69, 0.1)"
                     },
                     "&.Mui-disabled": {
                        opacity: 0.5
                     }
                  }}
               />
            ]
         }
      ],
      [handleDeleteOrder, isDeleting]
   );

   const rows = useMemo(() => {
      if (!orders) return [];
      return orders?.map((item) => ({
         id: item?._id,
         ItemsQty: item?.orderItems?.length,
         status: item?.orderStatus,
         createdAt: formatDate(item?.createdAt),
         amount: item?.totalPrice
      }));
   }, [orders]);

   return (
      <>
         <MetaData title={`All Orders - Admin`} />
         <section id="adminOrders">
            <div className="adminProducts_container">
               <h1 className="admin_heading">All Orders</h1>
               {isLoading ? (
                  <TableLoading />
               ) : (
                  <div className="adminProducts_box">
                     <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                           pagination: {
                              paginationModel: {
                                 pageSize: 8
                              }
                           }
                        }}
                        pageSizeOptions={[8, 16, 32]}
                        disableRowSelectionOnClick
                        sx={{
                           "& .MuiDataGrid-main": {
                              borderRadius: "12px",
                              overflow: "hidden",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                           },
                           "& .MuiDataGrid-columnHeader": {
                              backgroundColor: "#f8f9fa",
                              fontWeight: 600,
                              borderBottom: "2px solid #e9ecef"
                           },
                           "& .MuiDataGrid-cell": {
                              borderBottom: "1px solid #f1f3f4",
                              "&:focus, &:focus-within": {
                                 outline: "none"
                              }
                           },
                           "& .MuiDataGrid-row:hover": {
                              backgroundColor: "#f8f9fa"
                           },
                           "& .MuiDataGrid-actionsCell": {
                              gap: 1
                           },
                           "& .order_status_pending .MuiDataGrid-cellContent": {
                              backgroundColor: "rgba(220, 53, 69, 0.1)",
                              color: "#dc3545",
                              borderRadius: "12px",
                              padding: "4px 12px",
                              fontSize: "12px",
                              fontWeight: 600
                           },
                           "& .order_status_delivered .MuiDataGrid-cellContent": {
                              backgroundColor: "rgba(40, 167, 69, 0.1)",
                              color: "#28a745",
                              borderRadius: "12px",
                              padding: "4px 12px",
                              fontSize: "12px",
                              fontWeight: 600
                           }
                        }}
                     />
                  </div>
               )}
            </div>
         </section>
      </>
   );
};

export default AdminOrders;
