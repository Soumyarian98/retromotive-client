import { SignUp } from "@clerk/nextjs";
import { Stack, useTheme } from "@mui/material";

export default function Page() {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <Stack alignItems="center">
      <SignUp
        appearance={{
          variables: {
            colorPrimary: primary.main,
          },
          elements: {
            logoBox: {
              display: "none",
            },
          },
        }}
      />
    </Stack>
  );
}
