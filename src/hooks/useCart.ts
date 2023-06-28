import { useMutation, useQuery } from "@tanstack/react-query";

const useCart = () => {
  const cartData = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await fetch("http://localhost:9000/api/cart");
      const data = await response.json();
      return data;
    },
  });

  console.log(cartData.data, "cartData");

  return {
    cartData: cartData.data?.data,
    nonce: cartData.data?.nonce,
  };
};

export default useCart;
