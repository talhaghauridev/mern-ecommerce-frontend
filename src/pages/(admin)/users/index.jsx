import React, { memo, useCallback, useMemo, useState } from "react";
import { MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AdminLoading from "../components/AdminLoading";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useFetchUsers from "./hooks/useFetchUsers";
import useDeleteUser from "./hooks/useDeleteUser";

const ActionButton = memo(({ id }) => {
  const editLink = `/admin/product/${id}`;
  const { deleteUser, isLoading } = useDeleteUser();
  const handelDeleteProduct = useCallback(
    (userId) => {
      deleteUser(userId);
    },
    [deleteUser]
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

const AdminProducts = () => {
  const { users, isLoading } = useFetchUsers();
  const columns = [
    { field: "id", headerName: "User Id", type: "number" },
    {
      field: "name",
      headerName: "Name",
      type: "number",
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
    },
    {
      field: "role",
      headerName: "Role",
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
    if (!users) return [];
    return users?.map((item) => ({
      id: item?._id,
      name: item?.name,
      email: item?.email,
      role: item?.role,
    }));
  }, [users]);

  if (isLoading) {
    return <AdminLoading />;
  }
  return (
    <>
      <MetaData title={`All Users - Admin`} />
      <section id="adminUsers">
        <div className="adminUsers_container">
          <h1 className="admin_heading">All Users</h1>
          <div className="adminUsers_box">
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
