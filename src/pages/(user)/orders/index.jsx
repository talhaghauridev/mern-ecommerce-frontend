import React, { memo, useMemo } from "react";
import { MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetchOrders from "../hooks/useFetchOrders";
import TableLoading from "@components/TableLoading";
import { LuEye } from "react-icons/lu";

const ActionButton = memo(({ id }) => {
  return (
    <Link to={`/user/order/${id}`}>
      <LuEye className="text-[20px]" />
    </Link>
  );
});

const MyOrder = () => {
  const { isLoading, orders } = useFetchOrders();

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
      renderCell: (params) => <ActionButton {...params} />,
    },
  ];

  const rows = useMemo(() => {
    if (!orders) return [];
    return orders?.map((item) => ({
      id: item?._id,
      ItemsQty: item?.orderItems?.length,
      status: item?.orderStatus,
      amount: item?.totalPrice,
    }));
  }, [orders]);

  return (
    <>
      <MetaData title={`My Orders`} />
      <section id="myOrder">
        <div className="myOrder_container">
          <h1 className="order_heading">All Orders</h1>
          {isLoading ? (
            <TableLoading />
          ) : (
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
          )}
        </div>
      </section>
    </>
  );
};

export default MyOrder;
