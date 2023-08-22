import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";
import { Box } from "@mui/material";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formule for your skin's unique needs",
    img: "https://retromotive.co/wp-content/uploads/2022/07/COVERS1-large.jpg",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "https://retromotive.co/wp-content/uploads/2022/03/COVERS1-1-1024x1024.jpg",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "for your best look ever",
    img: "https://retromotive.co/wp-content/uploads/2023/03/COVERS1-large.jpg",
  },
];
const BannerItems = ({ bannerImages }: any) => {
  return (
    <section className="main relative">
      <div className="flex flex-col md:flex-row">
        {bannerImages.map((caseItem: any) => {
          return (
            <Box
              position="relative"
              bgcolor="black"
              sx={{ cursor: "pointer", width: "100%" }}
              key={caseItem._key}>
              <div className="w-full md:w-full h-[50vh] main flex flex-col justify-center p-4 md:p-12 border-box z-10 relative">
                <span className="mt-[156px] text-[1.2rem] md:text-[1.4rem] xl:text-[1.6rem] opacity-80 text-white">
                  {caseItem.title}
                </span>
                <h2 className="text-[2rem] leading-[2.2rem] md:leading-[2.4rem] xl:leading-[3rem] w-[85%] mt-2 md:mt-4 text-white font-bold">
                  {caseItem.description}
                </h2>
              </div>
              <div className="absolute overflow-hidden w-full h-full top-0 left-0 opacity-60 transition-opacity case-image">
                <img
                  src={sanityUrlBuiler(caseItem.featuredImage).width(400).url()}
                  className="w-full h-full object-cover"
                  alt={caseItem.title}
                />
              </div>
            </Box>
          );
        })}
      </div>
    </section>
  );
};

export default BannerItems;
