import React, { memo, useCallback, useMemo, useState } from "react";
import { Input, MetaData } from "@components/ui";
import { DataGrid } from "@mui/x-data-grid";
import AdminLoading from "../components/AdminLoading";
import { MdDelete } from "react-icons/md";
import useFetchReviews from "./hooks/useFetchReviews";
import { SiProducthunt } from "react-icons/si";
import NotFound from "../components/NotFound";
import { Rating } from "@mui/material";

const ActionButton = memo(({ id }) => {
  const editLink = `/admin/reviews/${id}`;

  return (
    <div className="flex items-center justify-center gap-[10px] md:gap-[15px] text-[#222935] text-[22px]">
      <button>
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
    { field: "id", headerName: "User Id", type: "number" },
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
      renderCell: (params) => <ActionButton {...params} />,
    },
  ];

  const rows = useMemo(() => {
    if (!reviews) return [];
    return reviews?.map((review) => ({
      id: review?.user,
      name: review?.name,
      rating: review?.rating,
      comment: review?.comment,
    }));
  }, [reviews]);

  if (isLoading) {
    return <AdminLoading />;
  }

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
        {reviews && reviews?.length > 0 ? (
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
