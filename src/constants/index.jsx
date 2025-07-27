import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { TbPasswordUser } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

const NAV = {
   Links: [
      {
         name: "Home",
         icon: <FiHome />,
         path: "/"
      },
      {
         name: "Products",
         icon: <LuLayoutDashboard />,
         path: "/products"
      }
   ],

   Icons: [
      {
         icon: <FaRegHeart />,
         path: "/whishlist"
      },
      {
         icon: <BsCart3 />,
         path: "/cart"
      },
      {
         icon: <CgProfile />,
         path: "/login"
      }
   ]
};

const USER_DROPDOWN_LINKS = [
   {
      name: "Profile",
      path: "/user/profile",
      icon: <CgProfile />
   },
   {
      name: "Orders",
      path: "/user/orders",
      icon: <FaRegListAlt />
   },
   {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <MdOutlineDashboardCustomize />
   }
];

const FOOTER = {
   Links: [
      {
         name: "Products",
         list: ["Overview", "Solutions", " Pricing", "Customers"]
      },
      {
         name: "Category",
         list: ["About", "Investor Relations", " Jobs", "Press", "Blog"]
      },

      {
         name: "Support",
         list: ["Contact", "Documentation", " Chat", "FAQ"]
      },
      {
         name: "Legal",
         list: ["Terms of Service", "               Privacy Policy", "Cookie settings "]
      }
   ],

   Icons: [FaInstagram, FaGithub, FaXTwitter, FaLinkedinIn]
};

const FILTERS = {
   Categories: ["Mobile", "Laptop", "Car", "Bag", "Shoes", "Clothes", "Machines"],
   Ratings: [5, 4, 3, 2, 1]
};

const ROLES = ["admin", "user"];

const FILTER_PRICE = [0, 25000];

const SHIPPING_INFO = "shipping_info";
const CART_ITEMS = "cart_items";
const USER_INFO_KEY = "userInfo";
const ORDER_INFO_KEY = "order_info";

const TOKEN = "user_token";
const STEPPER_STEPS = [
   {
      label: "Shipping Detial",
      icon: LiaShippingFastSolid
   },
   {
      label: "Confirm Order",
      icon: MdOutlineLibraryAddCheck
   },
   {
      label: "Payment",
      icon: RiBankFill
   }
];

const USER_PROFILE_LINK = [
   {
      name: "Profile",
      path: "/user/profile",
      icon: RiProfileLine
   },
   {
      name: "Orders",
      path: "/user/orders",
      icon: FaRegListAlt
   },
   {
      name: "Update Profile",
      path: "/user/profile/update",
      icon: RxUpdate
   },
   {
      name: "Update Password",
      path: "/user/password/update",
      icon: TbPasswordUser
   }
];

const ADMIN_LINKS = [
   {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LuLayoutDashboard
   },
   {
      name: "Products",
      icon: LuLayoutDashboard,
      links: [
         {
            name: "Create Product",
            path: "/admin/product/create"
         },
         {
            name: "Product List",
            path: "/admin/products"
         }
      ]
   },
   {
      name: "Users",
      icon: FaUsers,
      path: "/admin/users"
   },

   {
      name: "Reviews",
      icon: MdOutlineReviews,
      path: "/admin/reviews"
   },
   {
      name: "Orders",
      path: "/admin/orders",
      icon: FaRegListAlt
   }
];

const ORDER_PROCESS = ["Shipped", "Delivered"];
export {
   NAV,
   USER_DROPDOWN_LINKS,
   FOOTER,
   FILTERS,
   FILTER_PRICE,
   SHIPPING_INFO,
   CART_ITEMS,
   STEPPER_STEPS,
   USER_INFO_KEY,
   ORDER_INFO_KEY,
   TOKEN,
   USER_PROFILE_LINK,
   ADMIN_LINKS,
   ROLES,
   ORDER_PROCESS
};
