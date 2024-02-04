import React, { useState } from "react";
import { MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const MyOrder = () => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("Text");
  const {userInfo} = useSelector(state=>state.user)
  const columns = [
    { field: "id", headerName: "Order Id", maxWidth: 100 },
    {
      field: "ItemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 200,
      editable: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 200,
      editable: true,
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

  const user = [];

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
