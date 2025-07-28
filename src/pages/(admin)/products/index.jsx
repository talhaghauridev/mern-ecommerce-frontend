import React, { memo, useCallback, useMemo } from "react";
import { MetaData } from "@/components/ui";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetchProducts from "./hooks/useFetchProducts";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useDeleteProduct from "./hooks/useDeleteProduct";
import TableLoading from "../../../components/TableLoading";

const AdminProducts = () => {
   const { products, isLoading } = useFetchProducts();
   const { deleteProduct, isLoading: isDeleting } = useDeleteProduct();

   const handleDeleteProduct = useCallback(
      (productId) => {
         deleteProduct(productId);
      },
      [deleteProduct]
   );

   const columns = useMemo(
      () => [
         {
            field: "id",
            headerName: "Product Id",
            type: "string",
            flex: 1.2,
            minWidth: 150
         },
         {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 120
         },
         {
            field: "stock",
            headerName: "Stock",
            type: "number",
            flex: 0.8,
            minWidth: 80,
            align: "center",
            headerAlign: "center",
            cellClassName: (params) => {
               return params.value <= 10 ? "order_status_pending" : "order_status_delivered";
            }
         },
         {
            field: "price",
            headerName: "Price",
            type: "number",
            flex: 1,
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueFormatter: (value) => `$${value?.toFixed(2) || "0.00"}`
         },
         {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            flex: 0.8,
            minWidth: 80,
            align: "center",
            headerAlign: "center",
            getActions: (params) => [
               <GridActionsCellItem
                  key="edit"
                  icon={<FaEdit size={18} />}
                  label="Edit"
                  component={Link}
                  to={`/admin/product/${params.id}`}
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
                  onClick={() => handleDeleteProduct(params.id)}
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
      [handleDeleteProduct, isDeleting]
   );

   const rows = useMemo(() => {
      if (!products) return [];
      return products?.map((item) => ({
         id: item?._id,
         name: item?.name,
         stock: item?.stock,
         price: item?.price
      }));
   }, [products]);

   return (
      <>
         <MetaData title={`All Products - Admin`} />
         <section id="adminProducts">
            <div className="adminProducts_container">
               <h1 className="admin_heading">ALL Products</h1>
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
                           // ✅ Clean professional styling
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
                           // ✅ Status styling - only for Stock column
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

export default AdminProducts;
