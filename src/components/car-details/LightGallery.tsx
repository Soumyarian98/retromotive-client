import { useRef, forwardRef } from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// import { LightGallery as LG } from "lightgallery/lightgallery";

interface Props {
  images: string[];
}

const LightGaller = forwardRef<any, Props>(({ images }, ref) => {
  const onInit = (detail: any) => {
    //@ts-ignore
    ref!.current = detail.instance as any;
  };
  return (
    <LightGallery
      dynamic
      dynamicEl={images.map(el => {
        return {
          src: el,
          thumb: el,
        };
      })}
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    />
  );
});

export default LightGaller;
