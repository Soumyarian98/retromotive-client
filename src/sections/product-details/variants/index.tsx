import { Button, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import Quantity from "./Quantity";
import VariantItem from "./VariantItem";
import {
  AttributesDataEntity,
  DefaultAttributesEntity,
} from "@/types/product-details";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

interface Props {
  defaultAttributes: DefaultAttributesEntity[];
  attributes: AttributesDataEntity[];
  handleAddToCart: (params: { [key: string]: string }[]) => void;
}

const Variants: FC<Props> = ({
  defaultAttributes,
  attributes,
  handleAddToCart,
}) => {
  const [variant, setVariant] = useState<{ [key: string]: string }[]>(
    defaultAttributes.map(a => ({ [a.name]: a.option }))
  );

  return (
    <>
      <Stack spacing={1.5}>
        <Typography textTransform="uppercase" fontWeight={700}>
          Select Variant
        </Typography>
        {attributes?.map((attribute, i) => (
          <VariantItem
            key={attribute.id}
            onChange={variant =>
              setVariant(p => {
                const newVariant = [...p];
                newVariant[i] = { [attribute.name]: variant };
                return newVariant;
              })
            }
            value={variant[i][attribute.name]}
            attribute={attribute}
          />
        ))}
        <Quantity />
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={1}>
        <Button
          onClick={() => handleAddToCart(variant)}
          variant="contained"
          startIcon={<FiShoppingBag />}
          sx={{ flex: 1, textTransform: "uppercase" }}
          size="large">
          Add To Bag
        </Button>
        <Button
          variant="outlined"
          startIcon={<FiHeart />}
          sx={{ flex: 1, textTransform: "uppercase" }}
          size="large">
          Wishlist
        </Button>
      </Stack>
    </>
  );
};

export default Variants;
