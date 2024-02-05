import React, { useState } from "react";
import { MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fa42Group } from "react-icons/fa6";

const MyOrder = () => {
  const { userInfo } = useSelector((state) => state.user);
  const columns = [
    { field: "id", headerName: "Order Id", type: "number" },
    {
      field: "ItemsQty",
      headerName: "Items Qty",
      type: "number",
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      cellClassName: (params) => {
        console.log(params);
        return params.id === 3
          ? "order_status_pending"
          : "order_status_delivered";
      },
    },
    {
      field: "amount",
      headerName: "Amount",
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
            <Fa42Group />
          </Link>
        );
      },
    },
  ];

  const rows = [
    {
      id: 30,
      ItemsQty: "orderItems",
      status: "orderStatus",
      amount: "totalPrice",
    },
    {
      id: 3,
      ItemsQty: "2orderItems",
      status: "orderStatus",
      amount: "totalPrice",
    },
    {
      id: 20,
      ItemsQty: "orderItems",
      status: "orderStatus",
      amount: "totalPrice",
    },
    {
      id: 33,
      ItemsQty: "2orderItems",
      status: "orderStatus",
      amount: "totalPrice",
    },
  ];

  return (
    <>
      <MetaData title={`${userInfo?.name} - Orders`} />
      <section id="myOrder">
        <div className="myOrder_container">
          <div className="myOrder_box">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
