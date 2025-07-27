import React, { memo, useCallback, useMemo } from "react";
import { MetaData } from "@/components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TableLoading from "../../../components/TableLoading";
import useFetchOrders from "./hooks/useFetchOrders";
import useDeleteOrder from "./hooks/useDeleteOrder";
import formatDate from "@/utils/formatDate";

const ActionButton = memo(({ id }) => {
  const editLink = `/admin/order/${id}`;
  const { deleteOrder, isLoading } = useDeleteOrder();
  const handelDeleteProduct = useCallback(
    (productId) => {
      deleteOrder(productId);
    },
    [deleteOrder]
  );
  return (
    <div className="flex items-center justify-center gap-[10px] md:gap-[15px] text-[#222935] text-[22px]">
      <Link to={editLink}>
        <FaEdit />
      </Link>
      <button onClick={() => handelDeleteProduct(id)} disabled={isLoading}>
        <MdDelete cursor={"pointer"} />
      </button>
    </div>
  );
});

const AdminOrders = () => {
  const { orders, isLoading } = useFetchOrders();

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
        return params.value === "Processing"
          ? "order_status_pending"
          : "order_status_delivered";
      },
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "number",
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
      renderCell: useCallback((params) => <ActionButton id={params.id} />, []),
    },
  ];

  const rows = useMemo(() => {
    if (!orders) return [];
    return orders?.map((item) => ({
      id: item?._id,
      ItemsQty: item?.orderItems?.length,
      status: item?.orderStatus,
      createdAt: formatDate(item?.createdAt),
      amount: item?.totalPrice,
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
                      pageSize: 8,
                    },
                  },
                }}
                pageSizeOptions={[8]}
                disableRowSelectionOnClick
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminOrders;
