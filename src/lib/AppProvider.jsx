import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
const AppProvider = ({ children }) => {
   return (
      <Provider store={store}>
         <ToastContainer />
         {children}
      </Provider>
   );
};

export default AppProvider;
