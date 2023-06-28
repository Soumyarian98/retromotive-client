import { FC } from "react";
import { Chip, Stack, Typography } from "@mui/material";

import { AttributesDataEntity } from "@/types/product-details";

interface Props {
  attribute: AttributesDataEntity;
  value: string;
  onChange: (variant: string) => void;
}

const VariantItem: FC<Props> = ({ attribute, value, onChange }) => {
  return (
    <div>
      <Typography fontWeight={700} gutterBottom>
        {attribute.label}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        {attribute.options?.map(option => (
          <Chip
            onClick={() => onChange(option.slug)}
            key={option.slug}
            label={option.name}
            color="secondary"
            variant={value === option.slug ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </div>
  );
};

export default VariantItem;
