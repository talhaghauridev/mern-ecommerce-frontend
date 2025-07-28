import React, { useCallback, useMemo, useState } from "react";
import { Input, MetaData } from "@/components/ui";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import useFetchReviews from "./hooks/useFetchReviews";
import { SiProducthunt } from "react-icons/si";
import NotFound from "../components/NotFound";
import { Rating } from "@mui/material";
import TableLoading from "../../../components/TableLoading";
import useDeleteReview from "./hooks/useDeleteReview";

const Reviews = () => {
   const [productId, setProductId] = useState("");
   const { reviews, isLoading } = useFetchReviews(productId);
   const { deleteReview, isLoading: isDeleting } = useDeleteReview();

   const handleDeleteReview = useCallback(
      (reviewId) => {
         deleteReview({ productId, id: reviewId });
      },
      [deleteReview, productId]
   );

   const handleKeyPress = (e) => {
      setProductId(e.target.value);
   };

   const columns = useMemo(
      () => [
         {
            field: "userId",
            headerName: "User Id",
            type: "string",
            flex: 1,
            minWidth: 120
         },
         {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 150
         },
         {
            field: "rating",
            headerName: "Rating",
            flex: 1,
            minWidth: 150,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
               <div className="flex items-center justify-center gap-[2px]">
                  <Rating
                     name="half-rating-read"
                     defaultValue={params.value}
                     precision={0.5}
                     size="small"
                     readOnly
                  />
                  <span className="font-Poppins text-[13px]">{`(${params.value})`}</span>
               </div>
            )
         },
         {
            field: "comment",
            headerName: "Comment",
            flex: 1,
            minWidth: 200
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
                  key="delete"
                  icon={<MdDelete size={18} />}
                  label="Delete"
                  onClick={() => handleDeleteReview(params.id)}
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
      [handleDeleteReview, isDeleting]
   );

   const rows = useMemo(() => {
      if (!reviews) return [];
      return reviews?.map((review) => ({
         id: review?._id,
         userId: review?.user,
         name: review?.name,
         rating: review?.rating,
         comment: review?.comment
      }));
   }, [reviews]);

   return (
      <>
         <MetaData title={`All Reviews - Admin`} />
         <section id="adminReviews">
            <div className="adminReviews_container">
               <div className="flex items-center justify-start flex-col max-w-[100%] md:max-w-[400px]">
                  <h1 className="admin_heading">All Reviews</h1>
                  <Input
                     label="Add Product Id"
                     type="text"
                     placeholder="Enter your product id"
                     name="name"
                     value={productId}
                     leftIcon={SiProducthunt}
                     onChange={handleKeyPress}
                  />
               </div>
            </div>
            {isLoading ? (
               <TableLoading />
            ) : reviews && reviews?.length > 0 ? (
               <div className="adminReviews_box mt-[15px]">
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
            ) : (
               productId && reviews == false && <NotFound message="No Review found" />
            )}
         </section>
      </>
   );
};

export default Reviews;
