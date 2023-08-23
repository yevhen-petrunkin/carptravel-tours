import { GalleryPhotoT } from "@/types/GalleryPhotoT";

export type GallerySlideT = GalleryPhotoT & {
  index: number;
  position: number;
  active: boolean;
};
