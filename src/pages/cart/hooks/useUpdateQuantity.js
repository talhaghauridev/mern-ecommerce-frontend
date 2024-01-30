import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LocalStorage from "@utils/LocalStorage";
import { addToCart } from "@redux/reducers/cartReducer";
import { toast } from "react-toastify";

const localStorageItem = (productId) => {
  const cartItems = LocalStorage.get("cart") || [];
  return cartItems
    ?.filter((item) => item?._id === productId)
    .reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, []);
};
const useUpdateQuantity = (productId) => {
  const [isAddCart, setIsAddCart] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateQuantity = useCallback(
    (id, quantity) => {
      const { name, descripton, price, images, category, _id, stock } =
        localStorageItem(id);

      console.log(quantity);
      dispatch(
        addToCart({
          name,
          descripton,
          price,
          images,
          category,
          _id,
          stock,
          quantity: quantity,
        })
      );
      setIsAddCart(true);
    },
    [dispatch]
  );

  useEffect(() => {
    const cartItems = localStorageItem(productId);
    cartItems?.quantity ? setIsAddCart(true) : setIsAddCart(false);
    console.log(cartItems);
  }, [localStorageItem, productId, handleUpdateQuantity]);

  return {
    handleUpdateQuantity,
    isAddCart,
  };
};

export { useUpdateQuantity, localStorageItem };
