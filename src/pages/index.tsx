import Apparel from "@/sections/homepage/Apparel";
import Articles from "@/sections/homepage/Articles";
import GridBanners from "@/sections/homepage/GridBanners";
import HomeBanner from "@/sections/homepage/HomeBanner";
import MagazineGrid from "@/sections/homepage/MagazineGrid";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack alignItems="center" spacing={{ xs: 6, md: 12 }}>
      <HomeBanner />
      <GridBanners />
      <MagazineGrid />
      <Apparel />
      <Articles />
    </Stack>
  );
}
