import React, { useCallback, useMemo } from "react";
import { MetaData } from "@/components/ui";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useFetchUsers from "./hooks/useFetchUsers";
import useDeleteUser from "./hooks/useDeleteUser";
import TableLoading from "../../../components/TableLoading";

const AdminUsers = () => {
   const { users, isLoading } = useFetchUsers();
   const { deleteUser, isLoading: isDeleting } = useDeleteUser();

   const handleDeleteUser = useCallback(
      (userId) => {
         deleteUser(userId);
      },
      [deleteUser]
   );

   const columns = useMemo(
      () => [
         {
            field: "id",
            headerName: "User Id",
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
            field: "email",
            headerName: "Email",
            flex: 1,
            minWidth: 200
         },
         {
            field: "role",
            headerName: "Role",
            flex: 1,
            minWidth: 100,
            align: "center",
            headerAlign: "center"
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
                  to={`/admin/user/${params.id}`}
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
                  onClick={() => handleDeleteUser(params.id)}
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
      [handleDeleteUser, isDeleting]
   );

   const rows = useMemo(() => {
      if (!users) return [];
      return users?.map((item) => ({
         id: item?._id,
         name: item?.name,
         email: item?.email,
         role: item?.role
      }));
   }, [users]);

   return (
      <>
         <MetaData title={`All Users - Admin`} />
         <section id="adminUsers">
            <div className="adminUsers_container">
               <h1 className="admin_heading">All Users</h1>
               {isLoading ? (
                  <TableLoading />
               ) : (
                  <div className="adminUsers_box">
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

export default AdminUsers;
