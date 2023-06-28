import { useMutation } from "@tanstack/react-query";

interface AddToCartBody {
  body: {
    product_id: number;
    quantity: number;
    variation_id: number;
    variations: {
      [key: string]: string;
    };
  };
  nonce: string;
}

const useAddToCart = () => {
  const addToCartMutation = useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async (body: AddToCartBody) => {
      const response = await fetch("http://localhost:9000/api/add-to-cart", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    },
    onSuccess: data => {
      console.log(data, "add-to-cart data");
    },
    onError: error => {
      console.log(error, "add-to-cart error");
    },
  });

  return addToCartMutation;
};

export default useAddToCart;
