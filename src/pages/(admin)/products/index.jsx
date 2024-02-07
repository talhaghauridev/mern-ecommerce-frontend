import React, { useState } from "react";
import { MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Fa42Group } from "react-icons/fa6";
import { LuEye, LuEyeOff } from "react-icons/lu";
import useFetchProducts from "./hooks/useFetchProducts";
import AdminLoading from "../components/AdminLoading";

const AdminProducts = () => {
  const { data, isLoading } = useFetchProducts();
  const columns = [
    { field: "id", headerName: "Product Id", type: "number" },
    {
      field: "name",
      headerName: "Name",
      type: "number",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      cellClassName: (params) => {
        console.log(params);
        return params.id === 3
          ? "order_status_pending"
          : "order_status_delivered";
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      disableRowSelectionOnClick: true,
      disableReorder: true,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        console.log(params);
        return (
          <Link to={`/order/${params?.id}`}>
            <LuEye className="text-[22px]" />
          </Link>
        );
      },
    },
  ];

  const rows = [];

  data?.products &&
    data.products.forEach((item) => {
      rows.push({
        id: item._id,
        name: item?.name,
        stock: item?.stock,
        price: item?.price,
      });
    });

  if (isLoading) {
    return <AdminLoading />;
  }
  return (
    <>
      <MetaData title={`Products - Admin`} />
      <section id="adminProducts">
        <div className="adminProducts_container">
          <h1 className="admin_heading">Products</h1>
          <div className="adminProducts_box">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 8,
                  },
                },
              }}
              pageSizeOptions={[8]}
              disableRowSelectionOnClick
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProducts;
