import { BackDrop, Button, Input, MetaData, Select } from "@/components/ui";
import InputUpload from "@/components/ui/InputUpload";
import { FILTERS } from "@/constants/index";
import inputError from "@/utils/inputError";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import { TbFileDescription } from "react-icons/tb";
import UploadImage from "../components/UploadImage";
import useCreateProduct from "./hooks/useCreateProduct";

const CreateProduct = () => {
   const { formik, isLoading, handleFileChange, images, setImages } = useCreateProduct();
   const { handleSubmit, getFieldProps } = formik;
   return (
      <>
         {isLoading && <BackDrop isOpen={isLoading} />}

         <MetaData title={"Create Product - Admin"} />
         <section id="createProduct">
            <div className="form_container pt-0 px-[0px] ">
               <form
                  className="form "
                  onSubmit={handleSubmit}
                  encType="multipart/form-data">
                  <div className="form_heading">
                     <h1>Create Product</h1>
                  </div>
                  {/* Name Input  */}
                  <Input
                     label="Name"
                     type="text"
                     placeholder="Enter your name"
                     name="name"
                     leftIcon={SiProducthunt}
                     {...getFieldProps("name")}
                     error={inputError(formik, "name")}
                  />

                  {/* Input Description */}
                  <Input
                     label="Description"
                     type="text"
                     placeholder="Enter your description"
                     name="description"
                     leftIcon={TbFileDescription}
                     {...getFieldProps("description")}
                     error={inputError(formik, "description")}
                  />

                  <div className="flex gap-x-[10px]">
                     {/* Input Price */}
                     <Input
                        label="Price"
                        type="number"
                        placeholder="Enter your price"
                        name="price"
                        leftIcon={MdOutlinePriceChange}
                        {...getFieldProps("price")}
                        error={inputError(formik, "price")}
                     />

                     {/* Input stock */}
                     <Input
                        label="Stock"
                        type="number"
                        placeholder="Enter your stock"
                        name="stock"
                        leftIcon={FaBarsProgress}
                        {...getFieldProps("stock")}
                        error={inputError(formik, "stock")}
                     />
                  </div>

                  <Select
                     {...getFieldProps("category")}
                     error={inputError(formik, "category")}
                     leftIcon={BiCategoryAlt}>
                     <Select.Button>Select Category</Select.Button>
                     {FILTERS.Categories.map((item) => (
                        <Select.Option
                           key={item}
                           value={item}>
                           {item}
                        </Select.Option>
                     ))}
                  </Select>

                  {/* Input InputUpload */}
                  <div className="flex gap-1 w-full flex-col-reverse">
                     <UploadImage
                        images={images}
                        setImages={setImages}
                     />
                     <InputUpload
                        name={"Images"}
                        label={"Upload Images"}
                        multiple
                        onChange={handleFileChange}
                     />
                  </div>
                  <Button
                     type="submit"
                     className="max-w-full mt-2">
                     Create
                  </Button>
               </form>
            </div>
         </section>
      </>
   );
};

export default CreateProduct;
