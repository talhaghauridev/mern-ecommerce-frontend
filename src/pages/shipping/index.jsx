import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, MetaData, Select } from "@/components/ui";
import { MdPinDrop } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { TbBuildingEstate } from "react-icons/tb";
import { MdOutlineLocationCity } from "react-icons/md";
import { Country, State } from "country-state-city";
import { useShipping } from "./hooks/useShipping";
import Stepper from "@/components/Stepper";
import inputError from "@/utils/inputError";

const Shipping = () => {
   const { formik } = useShipping();
   const { handleSubmit, getFieldProps } = formik;
   return (
      <>
         <MetaData title={"Shipping"} />
         <Stepper activeStep={0} />
         <section id="shipping">
            <div className="form_container">
               <form
                  onSubmit={handleSubmit}
                  className="form gap-y-[12px!important]">
                  <div className="form_heading">
                     <h1>Shipping Detials</h1>
                  </div>
                  {/* Address Input  */}
                  <Input
                     label="Address"
                     type="text"
                     placeholder="Enter your address"
                     name="text"
                     leftIcon={HiOutlineHome}
                     {...getFieldProps("address")}
                     error={inputError(formik, "address")}
                  />

                  {/* City Input  */}
                  <Input
                     label="City"
                     type="text"
                     placeholder="Enter your city"
                     name="text"
                     leftIcon={MdOutlineLocationCity}
                     {...getFieldProps("city")}
                     error={inputError(formik, "city")}
                  />

                  {/* Pin Code Input  */}
                  <Input
                     label="Pin Code"
                     type="text"
                     placeholder="Enter your pin code"
                     name="number"
                     leftIcon={MdPinDrop}
                     {...getFieldProps("pinCode")}
                     error={inputError(formik, "pinCode")}
                  />

                  {/* Phone Number Input  */}
                  <Input
                     label="Phone Number"
                     type="number"
                     placeholder="Enter your phone Number"
                     name="number"
                     leftIcon={FaPhone}
                     {...getFieldProps("phoneNumber")}
                     error={inputError(formik, "phoneNumber")}
                  />

                  {/* Country Select  */}

                  <Select
                     leftIcon={BiWorld}
                     {...getFieldProps("country")}
                     error={inputError(formik, "country")}>
                     <Select.Button>Country</Select.Button>
                     {Country?.getAllCountries()?.map((country) => (
                        <Select.Option value={country?.isoCode}>{country?.name}</Select.Option>
                     ))}
                  </Select>

                  {/* State Select  */}

                  <Select
                     leftIcon={TbBuildingEstate}
                     {...getFieldProps("state")}
                     disabled={formik.values.country ? false : true}
                     error={inputError(formik, "state")}>
                     <Select.Button>State</Select.Button>
                     {State?.getStatesOfCountry(formik.values.country)?.map((state) => (
                        <Select.Option value={state?.isoCode}>{state?.name}</Select.Option>
                     ))}
                  </Select>

                  <Button
                     type="submit"
                     className="max-w-full mt-[18px]">
                     Continue
                  </Button>
               </form>
            </div>
         </section>
      </>
   );
};

export default Shipping;
