import { Stack } from "@mui/material";
import MagazineGrid from "@/sections/homepage/MagazineGrid";
import HomeBanner from "@/sections/homepage/home-banner";
import DataCarousel from "@/sections/homepage/data-carousel";
import MagazineSubscription from "@/sections/homepage/MagazineSubscription";
import { GetStaticProps } from "next";
import { client } from "../../sanity/lib/client";
import Apparel from "@/sections/homepage/Apparel";
import Articles from "@/sections/homepage/Articles";

export default function Home({ data, quaterlies }: any) {
  console.log(data, "duttaa");
  return (
    <Stack alignItems="center" spacing={{ xs: 3, md: 12 }}>
      <HomeBanner
        bannerTitle={data.bannerTitle}
        bannerImages={data.bannerImages}
      />
      <DataCarousel carousel={data.carousel} />
      <MagazineGrid quaterlies={data.quaterlies} />
      <Apparel apparel={data.apparel} />
      <Articles articles={data.articles} />
      <MagazineSubscription />
    </Stack>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "homepage"][0]{
    bannerTitle,
    bannerImages,
    carousel,
    "quaterlies": quaterlies[]-> {
      title,
      featuredImage,
      price,
      contentHandle,
      releaseDate
    },
    "apparel": apparel[]-> {
      title, variants[0]{price}, featuredImage
    },
    "articles": articles[]->{
      description,
      date,
      contentHandle,
      title,
      feturedImage
    }
  }`;
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
    revalidate: 86400,
  };
};
