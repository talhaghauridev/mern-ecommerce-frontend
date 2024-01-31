import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import LocalStorage from "@utils/LocalStorage";
import { addToCart } from "@redux/reducers/cartReducer";

const localStorageItem = (productId) => {
  const cartItems = LocalStorage.get("cart") || [];

  return cartItems
    ?.filter((item) => item?._id === productId)
    .reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, []);
};
const useAddToCart = () => {
  const [isAddCart, setIsAddCart] = useState(false);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    (product, quantity) => {
      const { name, descripton, price, images, category, _id, stock } = product;
      dispatch(
        addToCart({
          name,
          descripton,
          price,
          images,
          category,
          _id,
          stock,
          quantity,
        })
      );
      setIsAddCart(true);
    },
    [dispatch]
  );

  useEffect(() => {
    const cartItems = localStorageItem(productId);
    cartItems?._id  ? setIsAddCart(true) : setIsAddCart(false);
    console.log(cartItems === null, isAddCart, cartItems?._id);
  }, [localStorageItem, productId]);

  return {
    handleAddToCart,
    isAddCart,
  };
};

export { useAddToCart, localStorageItem };
