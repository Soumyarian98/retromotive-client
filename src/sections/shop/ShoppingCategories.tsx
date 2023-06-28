import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

interface Props {
  categoryData: any;
  activeCategoryId: number;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShoppingCategories: FC<Props> = ({
  activeCategoryId,
  categoryData,
  handleCategoryChange,
}) => {
  return (
    <div>
      <Typography
        variant="subtitle1"
        gutterBottom
        textTransform="uppercase"
        fontWeight={700}>
        Categories
      </Typography>
      <Stack>
        <RadioGroup value={activeCategoryId} onChange={handleCategoryChange}>
          {categoryData.map((c: any) => {
            return (
              <FormControlLabel
                key={c.id}
                value={c.id}
                control={<Radio />}
                label={`${c.name} (${c.count})`}
              />
            );
          })}
        </RadioGroup>
      </Stack>
    </div>
  );
};

export default ShoppingCategories;
