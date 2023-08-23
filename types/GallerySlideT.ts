import type { GalleryPhotoT } from "@/types";

type GallerySlideT = GalleryPhotoT & {
  index: number;
  position: number;
  active: boolean;
};

export default GallerySlideT;
