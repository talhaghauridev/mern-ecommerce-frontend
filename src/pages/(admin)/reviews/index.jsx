import React, { memo, useCallback, useMemo, useState } from "react";
import { Input, MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import useFetchReviews from "./hooks/useFetchReviews";
import { SiProducthunt } from "react-icons/si";
import NotFound from "../components/NotFound";
import { Rating } from "@mui/material";
import TableLoading from "../components/TableLoading";
import useDeleteReview from "./hooks/useDeleteReview";

const ActionButton = memo(({ id, productId }) => {
  const { deleteReview, isLoading } = useDeleteReview();
  console.log(id);
  console.log("productId", productId);
  const handelDeleteReview = useCallback(
    (reviewId) => {
      deleteReview({ productId, id: reviewId });
    },
    [deleteReview]
  );
  return (
    <div className="flex items-center justify-center gap-[10px] md:gap-[15px] text-[#222935] text-[22px]">
      <button onClick={() => handelDeleteReview(id)} disabled={isLoading}>
        <MdDelete cursor={"pointer"} />
      </button>
    </div>
  );
});
const UseRating = memo((params) => {
  return (
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
  );
});

const Reviews = () => {
  const [productId, setProductId] = useState("");
  const { reviews, isLoading } = useFetchReviews(productId);

  const handleKeyPress = (e) => {
    // if (e.key === "Enter") {
    setProductId(e.target.value);
    // }
  };
  const columns = [
    { field: "userId", headerName: "User Id", type: "number" },
    {
      field: "name",
      headerName: "Name",
      type: "text",
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      renderCell: (params) => <UseRating {...params} />,
    },
    {
      field: "comment",
      headerName: "Comment",
      type: "number",
    },

    {
      field: "action",
      headerName: "Action",
      type: "number",
      renderCell: (params) => (
        <ActionButton {...params} productId={productId} />
      ),
    },
  ];
  console.log(productId);
  const rows = useMemo(() => {
    if (!reviews) return [];
    return reviews?.map((review) => ({
      id: review?._id,
      userId: review?.user,
      name: review?.name,
      rating: review?.rating,
      comment: review?.comment,
    }));
  }, [reviews]);

  return (
    <>
      <MetaData title={`All Reviews - Admin`} />
      <section id="adminReviews">
        <div className="adminReviews_container">
          <div className="flex items-center justify-start flex-col max-w-[100%] md:max-w-[400px]  ">
            <h1 className="admin_heading">All Reviews </h1>

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
                    pageSize: 8,
                  },
                },
              }}
              pageSizeOptions={[8]}
              disableRowSelectionOnClick
            />
          </div>
        ) : (
          productId &&
          reviews == false && <NotFound message="No Review found" />
        )}
      </section>
    </>
  );
};

export default Reviews;
