import GalleryPhotoT from "@/types/GalleryPhotoT";

type GallerySlideT = GalleryPhotoT & {
  index: number;
  position: number;
  active: boolean;
};

export default GallerySlideT;
