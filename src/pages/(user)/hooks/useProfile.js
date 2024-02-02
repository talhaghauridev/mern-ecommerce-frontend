import { useSelector } from "react-redux";

const useProfile = () => {
  const { userInfo } = useSelector((state) => state.user);

  return {
    userInfo,
  };
};

export default useProfile;
