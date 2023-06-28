import {
  Grid,
  Stack,
  Button,
  Typography,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import React, { FC } from "react";
import { SlPencil } from "react-icons/sl";

export type Address = {
  id?: string | number | undefined;
  name: string;
  destination: string;
  building: string;
  street: string;
  city: string;
  state: string;
  country: string;
  post: string | number;
  phone: string | number;
  isDefault: boolean;
};

interface AddressCardProps {
  address: Address;
  change?: boolean;
  handleClickOpen?: (billingAddress: Address) => void;
  billingAddressHandler?: (billingAddress: Address) => void;
}

const AddressCard: FC<AddressCardProps> = ({
  address,
  billingAddressHandler,
  change,
  handleClickOpen,
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography variant="subtitle1">{address.name}</Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ textTransform: "capitalize" }}>
                  ({address.destination})
                </Typography>
                {address.isDefault && (
                  <Chip
                    sx={{
                      color: "primary.main",
                      bgcolor: "primary.lighter",
                      borderRadius: "10px",
                    }}
                    label="Default"
                    size="small"
                  />
                )}
              </Stack>
              {change && (
                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  startIcon={<SlPencil />}
                  onClick={() => {
                    if (handleClickOpen) {
                      handleClickOpen(address);
                    }
                  }}>
                  Change
                </Button>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography variant="body2" color="textSecondary">
                {`${address.building}, ${address.street}, ${address.city}, ${address.state}, ${address.country} - ${address.post}`}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {address.phone}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
