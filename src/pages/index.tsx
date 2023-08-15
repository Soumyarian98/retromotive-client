import { Stack } from "@mui/material";
// import Apparel from "@/sections/homepage/Apparel";
// import Articles from "@/sections/homepage/Articles";
import MagazineGrid from "@/sections/homepage/MagazineGrid";
import HomeBanner from "@/sections/homepage/home-banner";
import DataCarousel from "@/sections/homepage/data-carousel";
import MagazineSubscription from "@/sections/homepage/MagazineSubscription";

export default function Home() {
  return (
    <Stack alignItems="center" spacing={{ xs: 3, md: 12 }}>
      <HomeBanner />
      <DataCarousel />
      <MagazineGrid />
      <MagazineSubscription />
    </Stack>
  );
}
